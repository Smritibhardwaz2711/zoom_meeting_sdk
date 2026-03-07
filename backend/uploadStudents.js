// // import XLSX from "xlsx";
// // import { db } from "./db.js";

// // export const uploadStudents = async (req, res) => {
// //   try {
// //     const filePath = req.file.path;

// //     const workbook = XLSX.readFile(filePath);
// //     const sheetName = workbook.SheetNames[0];
// //     const sheetData = XLSX.utils.sheet_to_json(
// //       workbook.Sheets[sheetName]
// //     );

// //     /*
// //       Excel columns MUST be:
// //       name | reg_no | email | branch
// //     */

// //     for (const row of sheetData) {
// //       await db.query(
// //         `INSERT INTO students (name, reg_no, email, branch)
// //          VALUES (?, ?, ?, ?)
// //          ON DUPLICATE KEY UPDATE
// //            name = VALUES(name),
// //            branch = VALUES(branch)`,
// //         [
// //           row.name,
// //           row.reg_no,
// //           row.email,
// //           row.branch
// //         ]
// //       );
// //     }

// //     res.json({
// //       success: true,
// //       message: "Student data uploaded successfully",
// //       totalInserted: sheetData.length,
// //     });

// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Upload failed",
// //     });
// //   }
// // };


// import XLSX from "xlsx";
// import { db } from "./db.js";

// export const uploadStudents = async (req, res) => {
//   try {
//     const workbook = XLSX.readFile(req.file.path);
//     const sheet = XLSX.utils.sheet_to_json(
//       workbook.Sheets[workbook.SheetNames[0]]
//     );

//     for (const row of sheet) {
//       await db.query(
//         `INSERT INTO students (name, reg_no, email, branch)
//          VALUES (?, ?, ?, ?)
//          ON DUPLICATE KEY UPDATE
//            name = VALUES(name),
//            branch = VALUES(branch)`,
//         [row.name, row.reg_no, row.email, row.branch]
//       );
//     }

//     res.json({
//       success: true,
//       message: "Students uploaded successfully",
//       total: sheet.length,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Upload failed" });
//   }
// };









// import XLSX from "xlsx";
// import { db } from "./db.js";

// export const uploadStudents = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     const workbook = XLSX.readFile(req.file.path);
//     const sheetName = workbook.SheetNames[0];
//     const sheetData = XLSX.utils.sheet_to_json(
//       workbook.Sheets[sheetName],
//       { defval: "" }   // 👈 VERY IMPORTANT (no undefined)
//     );

//     console.log("📊 Excel Rows:", sheetData);

//     for (const row of sheetData) {

//       // 🔁 FLEXIBLE COLUMN MAPPING
//       const name =
//         row.name ||
//         row.Name ||
//         row["Student Name"] ||
//         row["NAME"];

//       const regNo =
//         row.reg_no ||
//         row["Registration Number"] ||
//         row["Reg No"] ||
//         row["REG NO"];

//       const email =
//         row.email ||
//         row.Email ||
//         row["Email ID"] ||
//         row["EMAIL"];

//       const branch =
//         row.branch ||
//         row.Branch ||
//         row.Department ||
//         "";

//       // 🚨 SKIP INVALID ROWS
//       if (!name || !regNo || !email) {
//         console.log("❌ Skipping row:", row);
//         continue;
//       }

//       await db.query(
//         `INSERT INTO students (name, reg_no, email, branch)
//          VALUES (?, ?, ?, ?)
//          ON DUPLICATE KEY UPDATE
//            name = VALUES(name),
//            branch = VALUES(branch)`,
//         [name.trim(), regNo, email.trim(), branch.trim()]
//       );
//     }

//     res.json({
//       success: true,
//       message: "Students uploaded successfully",
//       totalRows: sheetData.length,
//     });

//   } catch (error) {
//     console.error("🔥 Upload Error:", error);
//     res.status(500).json({ message: "Upload failed" });
//   }
// };








import XLSX from "xlsx";
import { db } from "./db.js";

export const uploadStudents = async (req, res) => {
  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheetName],
      { defval: "" }
    );

    console.log("📊 Excel rows:", sheetData);

    for (const row of sheetData) {

      // 🔧 FORCE FIELD MAPPING BASED ON YOUR FILE
      const regNo =
        row.reg_no ||
        row["Registration Number"] ||
        row["Reg No"] ||
        row["REG NO"];

      const email =
        row.email ||
        row.Email ||
        row["Email ID"] ||
        row["EMAIL"];

      const branch =
        row.branch ||
        row.Branch ||
        row.Department ||
        "";

      // 🔧 AUTO-GENERATE NAME (TEMP FIX)
      const name = row.name || row.Name || email.split("@")[0];

      if (!regNo || !email) {
        console.log("❌ Skipping row:", row);
        continue;
      }

      await db.query(
        `INSERT INTO students (name, reg_no, email, branch)
         VALUES (?, ?, ?, ?)`,
        [name.trim(), regNo, email.trim(), branch.trim()]
      );
    }

    res.json({
      success: true,
      message: "Students uploaded successfully",
    });

  } catch (error) {
    console.error("🔥 Upload Error:", error);
    res.status(500).json({ message: "Upload failed" });
  }
};
