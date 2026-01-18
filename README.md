🧪 Web UI Automation Framework – Saucedemo
📌 Deskripsi Proyek

Repository ini berisi framework pengujian otomatis UI Web yang dibangun menggunakan:

Java 8

Gradle

Selenium WebDriver

Cucumber (BDD)

Page Object Model (POM)

Framework ini digunakan untuk menguji fitur login pada website demo
🔗 https://www.saucedemo.com/

Pendekatan Behavior Driven Development (BDD) digunakan agar test case mudah dibaca dan dipahami oleh tim teknis maupun non-teknis.

🎯 Tujuan Framework

Framework ini bertujuan untuk:

Mengotomatiskan pengujian UI Web secara terstruktur

Memisahkan logika halaman dan test scenario (POM)

Menyediakan test case dalam bentuk narasi (Gherkin)

Mudah dikembangkan dan dirawat

Mendukung Java 8 (kompatibel dengan environment legacy)

🛠️ Teknologi yang Digunakan
Teknologi	Keterangan
Java 8	Bahasa pemrograman utama
Gradle	Build & dependency management
Selenium WebDriver	Otomatisasi browser
Cucumber	BDD framework
JUnit 4	Test runner
WebDriverManager	Manajemen driver browser otomatis
Chrome Browser	Browser untuk eksekusi test
📁 Struktur Proyek
.
├── build.gradle
├── settings.gradle
├── README.md
└── src
    └── test
        ├── java
        │   ├── pages
        │   │   ├── LoginPage.java
        │   │   └── InventoryPage.java
        │   ├── stepdefinitions
        │   │   └── LoginSteps.java
        │   ├── runners
        │   │   └── TestRunner.java
        │   └── utils
        │       └── DriverManager.java
        └── resources
            └── features
                └── login.feature

🧱 Arsitektur Framework
1️⃣ Page Object Model (POM)

Setiap halaman web direpresentasikan oleh satu class Java:

LoginPage.java → halaman login Saucedemo

InventoryPage.java → halaman setelah login sukses

Keuntungan:

Locator dan aksi halaman terpusat

Perubahan UI tidak memengaruhi test case

Kode lebih rapi dan mudah dirawat

2️⃣ Gherkin Feature File

Test case ditulis dalam format Gherkin:

Scenario: Successful login with valid credentials
  Given user navigates to saucedemo login
  When user enters username "standard_user"
  And user enters password "secret_sauce"
  And user submits login
  Then user should see inventory page


Jenis test yang diimplementasikan:

✅ Positif (login berhasil)

❌ Negatif (password salah)

⚠️ Batas / edge case (input kosong)

3️⃣ Step Definitions

File LoginSteps.java berfungsi sebagai penghubung antara:

Gherkin scenario

Aksi Selenium WebDriver

Setiap langkah Gherkin dipetakan ke method Java.

4️⃣ WebDriver Management

Framework menggunakan WebDriverManager untuk:

Mendownload ChromeDriver secara otomatis

Menyesuaikan versi driver dengan browser

Menghilangkan kebutuhan setup manual

WebDriverManager.chromedriver().setup();

▶️ Cara Menjalankan Test
Prasyarat

Java JDK 8

Google Chrome

Internet aktif (untuk download driver otomatis)

**Langkah Eksekusi :**
gradle clean test
