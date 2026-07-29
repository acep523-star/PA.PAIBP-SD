# Aplikasi PAI BP SD

Aplikasi Perangkat Pembelajaran Pendidikan Agama Islam dan Budi Pekerti (PAI BP) jenjang SD. Aplikasi ini dibangun dengan React (Vite), Tailwind CSS, Firebase (Firestore & Auth), dan Google Gemini API.

## Persiapan Deployment ke Vercel dan GitHub

Aplikasi ini sudah dikonfigurasi dan siap untuk di-deploy ke Vercel! 🚀
Berikut adalah langkah-langkah untuk melakukan deployment:

### 1. Push Kode ke GitHub

1. Buka terminal Anda dan inisialisasi git repository jika belum:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Buat repository baru di GitHub (bisa private atau public).
3. Hubungkan repository lokal Anda ke GitHub:
   ```bash
   git remote add origin https://github.com/username-anda/nama-repo-anda.git
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy ke Vercel

1. Login ke [Vercel](https://vercel.com) menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository GitHub yang baru saja Anda push, lalu klik **"Import"**.
4. Di halaman konfigurasi Vercel:
   - **Framework Preset**: Vercel akan otomatis mendeteksi **Vite**. Biarkan pengaturan ini.
   - **Environment Variables**: Buka bagian ini dan tambahkan variabel berikut:
     - Name: `GEMINI_API_KEY`
     - Value: *(masukkan API Key Gemini Anda di sini)*
5. Klik **"Deploy"** dan tunggu hingga proses selesai (biasanya sekitar 1-2 menit).

### 3. Selesai! 🎉
Setelah deployment selesai, Anda akan mendapatkan URL Vercel (misal: `https://nama-aplikasi.vercel.app`). Buka URL tersebut, dan aplikasi Anda sudah bisa digunakan secara online!

---

## Catatan Teknis

- **Routing Frontend**: Konfigurasi di `vercel.json` sudah diatur sedemikian rupa agar routing React Router berjalan lancar.
- **Serverless API**: File server di-export secara otomatis menjadi Vercel Serverless Function melalui `api/[...slug].ts` dengan batas waktu maksimal 60 detik (`maxDuration = 60`), sehingga proses *generate* Modul Ajar dan Prota dengan Gemini API tidak akan *timeout*.
- **Firebase**: Konfigurasi Firebase Anda sudah tersimpan di `firebase-applet-config.json` (dan aman untuk disebarkan karena sistem *security rules* Firestore sudah mengamankannya), sehingga fungsi Autentikasi dan Database akan langsung berjalan dengan lancar di Vercel tanpa perlu setup Environment Variables Firebase secara manual.
