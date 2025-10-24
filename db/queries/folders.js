import db from "#db/client";

export async function createFolder(name) {
  const sql = `
    INSERT INTO folders (name)
    VALUES ($1)
    RETURNING *
    `;
  const {
    rows: [folder],
  } = await db.query(sql, [name]);
  return folder;
}

export async function getFolders() {
  const sql = `
    SELECT * FROM folders
    `;
  const { rows: folders } = await db.query(sql);
  return folders;
}

export async function getFolderByIdWithFiles(id) {
  const sql = `
    SELECT 
      folders.*,
      json_agg(
        json_build_object(
          'id', files.id,
          'name', files.name,
          'size', files.size,
          'folder_id', files.folder_id
        )
      ) AS files
    FROM folders 
    LEFT JOIN files ON files.folder_id = folders.id
    WHERE folders.id = $1
    GROUP BY folders.id, folders.name
    `;
  const {
    rows: [folder],
  } = await db.query(sql, [id]);
  return folder;
}
