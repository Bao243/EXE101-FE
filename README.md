# 🥗 MealBuddy (MealMate) - Frontend Application

> **Ứng dụng di động thông minh hỗ trợ dinh dưỡng, gợi ý thực đơn cá nhân hóa theo chỉ số BMI và nhận diện nguyên liệu/món ăn qua Camera tích hợp AI.**

[![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020.svg?style=flat&logo=expo)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB.svg?style=flat&logo=react)](https://reactnative.dev)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.x-339933.svg?style=flat&logo=node.js)](https://nodejs.org)
[![PayOS](https://img.shields.io/badge/Payment-PayOS-0052CC.svg?style=flat)](https://payos.vn)
[![License](https://img.shields.io/badge/License-Private-red.svg?style=flat)]()

---

## 📌 Giới thiệu dự án

**MealBuddy (MealMate)** là ứng dụng di động được xây dựng trên nền tảng **React Native** kết hợp **Expo SDK**, đóng vai trò là giao diện người dùng (Frontend) tương tác với hệ thống quản lý dinh dưỡng và gợi ý bữa ăn cá nhân hóa.

Ứng dụng giúp người dùng theo dõi chế độ dinh dưỡng hàng ngày, tính toán calo theo chỉ số thể chất (BMI), quét và phân tích nguyên liệu qua camera với sự hỗ trợ của trí tuệ nhân tạo (AI Gemini), từ đó xây dựng kế hoạch thực đơn chi tiết và khoa học.

---

## ✨ Tính năng nổi bật

### 1. 🔐 Xác thực & Quản lý tài khoản
- Đăng ký và đăng nhập bảo mật với JWT.
- Cơ chế **Auto Refresh Token** tự động làm mới access token khi hết hạn (xử lý lỗi 401 mượt mà mà không gián đoạn trải nghiệm người dùng).
- Đổi mật khẩu, xem và cập nhật hồ sơ cá nhân.
- Xem điều khoản sử dụng, chính sách bảo mật và liên hệ hợp tác.

### 2. 🎯 Onboarding & Đánh giá thể chất (BMI)
- Khảo sát người dùng khi bắt đầu: Mục tiêu (Tăng cân, Giảm cân, Giữ dáng), mức độ hoạt động thể chất, chiều cao, cân nặng.
- Tự động tính toán chỉ số BMI, phân loại thể trạng và đề xuất lượng calo mục tiêu (Target Calories) cần nạp mỗi ngày.
- Tự động tạo kế hoạch bữa ăn khởi tạo dựa trên kết quả BMI.

### 3. 📸 Nhận diện nguyên liệu bằng AI qua Camera
- Tích hợp máy ảnh trực tiếp (`expo-camera`) và thư viện ảnh (`expo-image-picker`).
- Hỗ trợ nén và tối ưu hóa hình ảnh trước khi truyền tải (`expo-image-manipulator`).
- Kết nối Backend AI (Gemini) để nhận diện danh sách nguyên liệu có trong ảnh.
- Khớp nguyên liệu với kho dữ liệu và tự động đề xuất các món ăn phù hợp với nguyên liệu đang có.

### 4. 📅 Nhật ký bữa ăn & Kế hoạch tuần (Weekly Meal Plan)
- **Nhật ký hàng ngày (Journal)**: Theo dõi 3 bữa chính (Sáng, Trưa, Tối).
- Thêm món, xóa món, thay đổi món ăn linh hoạt theo từng bữa trong ngày.
- Thanh chọn ngày trong tuần trực quan (`WeekStrip`).
- Đồng bộ hóa trạng thái món ăn đã lưu (`SavedMealsContext`) và nhật ký bữa ăn với server.

### 5. 🍲 Khám phá & Tìm kiếm công thức (Recipe Explorer)
- Danh mục công thức đa dạng: Mới nhất, Gợi ý thực đơn, Lọc theo bữa ăn (Sáng / Trưa / Tối).
- Tìm kiếm món ăn thông minh theo tên món hoặc danh sách nguyên liệu sẵn có.
- Chi tiết công thức nấu ăn (`DetailsMealScreen`): Lượng calo (kcal), thời gian chế biến, định lượng nguyên liệu và các bước hướng dẫn cụ thể.
- Tính năng đánh dấu / lưu món ăn yêu thích (Bookmark).

### 6. 📊 Phân tích dinh dưỡng & Thống kê Calo (Analytics)
- Biểu đồ cột hiển thị lượng calo tiêu thụ từng ngày trong tuần (T2 - CN).
- So sánh lượng calo thực tế với lượng calo mục tiêu (Target Calorie).
- Cảnh báo calo vượt mức hoặc theo dõi xu hướng dinh dưỡng theo tuần.

### 7. 💎 Gói thành viên Premium & Thanh toán trực tuyến
- Phân quyền tính năng theo cấp độ người dùng (Miễn phí vs Premium).
- Tích hợp cổng thanh toán **PayOS** thông qua Web Browser / Webview an toàn.
- Kiểm tra và đồng bộ trạng thái đơn hàng tự động (Polling / Verification API).

### 8. 🔔 Quản lý thông báo (Notifications)
- Nhận thông báo hệ thống và lời nhắc dinh dưỡng.
- Hỗ trợ đánh dấu đã đọc, đánh dấu tất cả đã đọc, xóa từng thông báo.
- Tổng kết lượng calo hàng tuần (Weekly Kcal Summary).

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ / Thư viện | Phiên bản |
| :--- | :--- | :--- |
| **Framework** | [React Native](https://reactnative.dev/) / [Expo SDK](https://expo.dev/) | `0.81.5` / `~54.0.37` |
| **Ngôn ngữ** | JavaScript (ES6+ / React 19) | `react@19.1.0` |
| **Navigation** | [React Navigation v7](https://reactnavigation.org/) | Native Stack, Bottom Tabs |
| **Local Storage** | `@react-native-async-storage/async-storage` | `^2.2.0` |
| **Hardware & Media** | `expo-camera`, `expo-image-picker`, `expo-image-manipulator` | SDK 54 compatible |
| **Notification** | `expo-notifications` | `~0.32.17` |
| **Icons & UI** | `@expo/vector-icons`, `expo-linear-gradient` | — |
| **Thanh toán Web** | `expo-web-browser` (Tích hợp PayOS Gateway) | `~15.0.11` |
| **Build & Deploy** | EAS Build (`eas-cli`) | Build APK & AAB |

---

## 📁 Cấu trúc thư mục

```text
EXE201-FE_Mealmate/
├── assets/                     # Tài nguyên tĩnh (icon, splash, adaptive-icon)
├── src/
│   ├── api/                    # Quản lý tương tác API Backend
│   │   ├── auth.js             # Đăng nhập, đăng ký, profile, auto-refresh token
│   │   ├── meals.js            # Khám phá món ăn, search, gợi ý AI, lưu món, kế hoạch tuần
│   │   ├── notification.js     # Danh sách thông báo, đánh dấu đọc, tổng kết calo
│   │   └── payment.js          # Tạo link thanh toán PayOS, kiểm tra giao dịch
│   ├── components/             # Các UI components tái sử dụng
│   │   ├── FixedHeader.js      # Thanh header cố định có nút Profile, Premium, Thông báo
│   │   ├── ScrollPicker.js     # Component cuộn chọn giá trị (chiều cao, cân nặng)
│   │   └── WeekStrip.js        # Thanh trượt chọn ngày trong tuần (T2 - CN)
│   ├── context/                # Quản lý trạng thái toàn cục (React Context)
│   │   ├── MealsContext.js     # Quản lý thực đơn và món ăn trong ngày
│   │   ├── NotificationContext.js # Đếm số lượng thông báo chưa đọc
│   │   ├── PremiumContext.js   # Quản lý trạng thái Premium của tài khoản
│   │   ├── SavedMealsContext.js# Quản lý danh sách món ăn đã bookmark/lưu
│   │   └── WeekContext.js      # Quản lý ngày/tuần đang được chọn
│   ├── navigation/             # Cấu hình điều hướng ứng dụng
│   │   ├── AuthStack.js        # Stack điều hướng chính (Authentication, Onboarding, Modals)
│   │   └── BottomTabs.js       # Thanh điều hướng tab dưới cùng (Nhật ký, Phân tích, Camera, Công thức, Hồ sơ)
│   ├── screens/                # Toàn bộ màn hình ứng dụng (31 màn hình)
│   │   ├── HomeScreen.js       # Màn hình trang chủ (Nhật ký bữa ăn)
│   │   ├── CameraCaptureScreen.js # Màn hình chụp/chọn ảnh nguyên liệu
│   │   ├── AnalyzingScreen.js  # Màn hình chờ AI phân tích
│   │   ├── AnalyzeResultScreen.js # Kết quả nhận diện & món ăn đề xuất
│   │   ├── RecipeScreen.js     # Khám phá công thức nấu ăn
│   │   ├── SearchRecipeScreen.js # Tìm kiếm món ăn theo nguyên liệu
│   │   ├── DetailsMealScreen.js # Chi tiết món ăn & hướng dẫn nấu
│   │   ├── AnalyzeScreen.js    # Báo cáo thống kê calo tuần & BMI
│   │   ├── PremiumScreen.js    # Lựa chọn gói Premium
│   │   ├── PaymentWebScreen.js # Màn hình thanh toán PayOS
│   │   ├── Onboarding*.js      # Chuỗi màn hình khảo sát thể chất & tính BMI
│   │   └── ...                 # Các màn hình xác thực và cài đặt khác
│   └── utils/                  # Các hàm tiện ích bổ trợ
├── .env                        # File biến môi trường (Base API URL)
├── app.json                    # Cấu hình dự án Expo
├── eas.json                    # Cấu hình EAS Build (Preview APK, Release App Bundle)
├── index.js                    # Entry point đăng ký ứng dụng
├── App.js                      # Root component bọc Provider và Navigation
└── package.json                # Danh sách dependencies và scripts
```

---

## 🚀 Hướng dẫn cài đặt & Chạy ứng dụng

### 1. Yêu cầu hệ thống (Prerequisites)
- **Node.js**: Phiên bản 18.x trở lên ([Tải tại đây](https://nodejs.org/)).
- **npm** hoặc **yarn** / **pnpm**.
- **Expo Go App**: Cài đặt trên điện thoại di động (Android hoặc iOS) từ CH Play / App Store để test nhanh.
- *(Tùy chọn)* **Android Studio** hoặc **Xcode** nếu muốn chạy trên máy ảo (Emulator/Simulator).

### 2. Cài đặt các gói phụ thuộc (Dependencies)
Mở terminal tại thư mục gốc của dự án `EXE201-FE_Mealmate`:

```bash
npm install
```

### 3. Cấu hình Biến môi trường (`.env`)
Tạo hoặc kiểm tra file `.env` tại thư mục gốc của dự án:

```env
# Địa chỉ URL của Backend API
EXPO_PUBLIC_API_BASE=https://exe101-be-p1xz.onrender.com/api
```

> **Lưu ý khi chạy với Backend Local:**
> - **Android Emulator**: Sử dụng `http://10.0.2.2:3000/api`
> - **iOS Simulator**: Sử dụng `http://localhost:3000/api`
> - **Thiết bị thật (qua Expo Go)**: Sử dụng IP mạng LAN của máy tính phát triển, ví dụ: `http://192.168.1.50:3000/api`

### 4. Khởi chạy ứng dụng (Development)

Khởi động Expo Development Server:
```bash
npm start
# hoặc
npx expo start -c
```

*(Ghi chú: Cờ `-c` giúp xóa cache Metro bundler để đảm bảo nạp đúng mã nguồn mới nhất).*

- **Trên điện thoại thật**: Mở ứng dụng **Expo Go**, dùng camera quét mã QR code hiển thị trên terminal hoặc giao diện web.
- **Trên máy ảo Android**: Nhấn phím `a` trên terminal hoặc chạy `npm run android`.
- **Trên máy ảo iOS**: Nhấn phím `i` trên terminal hoặc chạy `npm run ios`.
- **Trên trình duyệt Web**: Nhấn phím `w` hoặc chạy `npm run web`.

---

## 📦 Hướng dẫn Build file APK (EAS Build)

Dự án đã được cấu hình sẵn file `eas.json` phục vụ việc đóng gói ứng dụng di động:

### Bước 1: Cài đặt EAS CLI & Đăng nhập
```bash
npm install -g eas-cli
eas login
```

### Bước 2: Build file APK cài trực tiếp cho Android (Preview Profile)
```bash
eas build -p android --profile preview
```

Quá trình build sẽ diễn ra trên hạ tầng cloud của Expo. Sau khi hoàn thành, terminal sẽ cung cấp đường link tải trực tiếp file `.apk` để cài đặt lên thiết bị Android thật.

---

## 🔌 Tích hợp API Backend

Ứng dụng giao tiếp với hệ thống Backend thông qua các endpoints chính:

- **Auth & User (`src/api/auth.js`)**:
  - `POST /users/login`: Đăng nhập hệ thống.
  - `POST /users/register`: Đăng ký tài khoản mới.
  - `GET /users/getprofile`: Lấy thông tin cá nhân.
  - `POST /users/refresh`: Cấp lại Access Token qua Refresh Token.
  - `DELETE /users/delete`: Yêu cầu xóa tài khoản.
- **Meals & AI (`src/api/meals.js`)**:
  - `GET /meals/getallmeal`: Lấy danh sách món ăn phân trang.
  - `GET /meals/search`: Tìm kiếm món ăn theo từ khóa và danh sách nguyên liệu.
  - `POST /meals/analyze-ingredients`: Gửi ảnh để AI phân tích nguyên liệu và đề xuất món.
  - `POST /meals/recommend-by-bmi`: Gợi ý thực đơn tuần dựa theo chỉ số BMI.
  - `POST /meals/save` & `GET /meals/saved`: Quản lý danh sách món ăn đã bookmark.
  - `POST /meals/log` & `GET /meals/logs`: Ghi nhận và theo dõi nhật ký dinh dưỡng.
- **Payment (`src/api/payment.js`)**:
  - `POST /payment/create`: Khởi tạo link thanh toán PayOS cho gói Premium.
  - `GET /payment/history`: Truy vấn lịch sử giao dịch và xác thực thanh toán.
- **Notifications (`src/api/notification.js`)**:
  - `GET /noti`: Lấy danh sách thông báo.
  - `PATCH /noti/read-all`: Đánh dấu toàn bộ thông báo đã đọc.

---

## 👥 Đội ngũ phát triển

- Dự án thuộc môn học **EXE201**
- Tên dự án: **MealBuddy / MealMate**
- Nhóm phát triển: **Nhóm dự án EXE201**

---

*Nếu bạn gặp bất kỳ vấn đề nào trong quá trình cài đặt hoặc vận hành ứng dụng, vui lòng mở issue hoặc liên hệ với thành viên phụ trách nhóm.*
