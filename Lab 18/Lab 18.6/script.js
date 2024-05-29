// Lưu trữ array của những array này vào biến 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
listOfNeighbours.forEach((neighbours, index) => {
    if (neighbours.length >= 2) {
        //in ra lần lượt phần tử từ thứ 2 trở đi
        for (let i = 1; i < neighbours.length ; i++) {
            console.log(neighbours[i]);
        }
    }
});