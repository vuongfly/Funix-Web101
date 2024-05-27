// 1. Nhiệm vụ của bạn:
// Tính điểm cho từng đội, sử dụng dữ liệu kiểm tra bên dưới
// So sánh điểm trung bình của hai đội để tìm ra đội chiến thắng và in ra console. Đừng quên là có thể hòa, nên hãy kiểm tra điều đó (hòa tức là họ có điểm trung bình giống nhau)
// Bonus 1: Chúng ta được thêm một quy tắc như sau: số điểm tối thiểu là 100 điểm . Theo quy tắc này, một đội sẽ giành chiến thắng chỉ khi họ có điểm trung bình cao hơn đội còn lại, và đồng thời có ít nhất 100 điểm. Gợi ý: Sử dụng toán tử logic để kiểm tra điểm số tối thiểu cũng như các else-if block!
// Bonus 2: Điểm số tối thiểu cũng áp dụng cho việc hòa trận! Trường hợp hòa nhau chỉ xảy ra khi cả hai đội có số điểm giống nhau mà phải lớn hơn hoặc bằng 100 điểm. Nếu không thì không có đội nào giành chiến thắng cả.
// 2. Dữ liệu kiểm tra:
// Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm
// Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm
// Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm

const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 123) / 3;
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;

if (dolphins > koalas && dolphins >= 100) {
    console.log(`Dolphins win (${dolphins} vs. ${koalas})`);
} else if (koalas > dolphins && koalas >= 100) {
    console.log(`Koalas win (${koalas} vs. ${dolphins})`);
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log(`It's a draw (${dolphins} vs. ${koalas})`);
}

// 1. Nhiệm vụ của bạn:
// Tính tip dựa theo giá trị hóa đơn. Tạo biến 'tip' cho điều này. Không dùng câu lệnh if/else (Để dễ hơn, bạn có thể bắt đầu với lệnh if/else sau đó chuyển đổi nó thành toán tử ba ngôi!)
// In string ra console có chứa giá trị hóa đơn (bill), tiền tip và giá trị cuối cùng (bill + tip). Ví dụ: “The bill was 275, the tip was 41.25, and the total value 316.25”
// 2. Dữ liệu kiểm tra:
// Dữ liệu 1: Kiểm tra giá trị bill 275, 40 và 430
const bill = 275;
// const bill = 40;
// const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)