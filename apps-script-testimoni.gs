/**
 * Kode ini ditempel di Google Apps Script, dihubungkan ke satu Google Sheet.
 * Fungsinya: menerima kiriman dari form testimoni.html dan menambahkannya
 * sebagai baris baru di sheet.
 *
 * CARA PASANG:
 * 1. Buka https://sheets.google.com, buat Spreadsheet baru, beri nama misal "Testimoni Moment Kita".
 * 2. Di baris pertama (header), isi kolom: Waktu | Nama | Kota/Tema | Rating | Testimoni | Status
 * 3. Klik menu Extensions > Apps Script.
 * 4. Hapus kode contoh yang ada, ganti dengan SELURUH isi file ini.
 * 5. Klik Deploy > New deployment > pilih tipe "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Klik Deploy, izinkan aksesnya (Authorize access), lalu copy link "Web app URL"-nya.
 * 7. Tempel link itu ke CONFIG.sheetUrl di script.js.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;
  sheet.appendRow([
    new Date(),
    p.nama || "",
    p.kota || "",
    p.bintang || "",
    p.isi || "",
    "Menunggu"
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
