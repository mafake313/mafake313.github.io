function predictWinner() {
    var team = document.getElementById("team").value;
    var resultElement = document.getElementById("prediction-result");

    // 根据选择的队伍进行预测，这里可以根据实际情况修改逻辑
    var result = "你预测 " + getTeamName(team) + " 赢得了美洲杯!";
    
    resultElement.textContent = result;
}

function getTeamName(team) {
    switch(team) {
        case "argentina":
            return "阿根廷";
        case "brazil":
            return "巴西";
        case "chile":
            return "智利";
        case "colombia":
            return "哥伦比亚";
        // 可以根据实际情况添加更多选项
        default:
            return "未知";
    }
}
