function searchByPara(){
	var account = $("#account").val();
	window.location.href = "/log/list?account="+escape(escape(account));
}

function viewDashView(id) {
    window.location.href = "/dash/detail?dashView=1&id="+id;
}
function viewChartDashView(id) {
    window.location.href = "/dash/chart?dashView=1&id="+id;
}
function viewDatetDashView(id,dates){
    window.location.href = "/dash/chart?dashView=1&id="+id+"&date="+dates;
}
function view(id) {
	window.location.href = "/dash/detail?id="+id;
}
function viewChart(id) {
	window.location.href = "/dash/chart?id="+id;
}
function viewGrafana(id) {
	window.location.href = "/dash/grafana?id="+id;
}

function del(id) {
	if(confirm('你确定要删除吗？')) {
		window.location.href = "/dash/del?id=" + id;
	}
}

function viewDate(id,dates){
	window.location.href = "/dash/chart?id="+id+"&date="+dates;
}

function viewApps(hostname){
    window.location.href = "/appInfo/list?hostname="+hostname;
}

function ajaxSaveRemark() {
    $("#form2").ajaxSubmit(function(message) {
        window.location.href = window.location.href;
    });
}

function setHostRemark(hostname,hostId,hostRemark) {
    $("#id").val(hostId);
    $("#ip").val(hostname);
    $("#remark").val(hostRemark);
}
function cancel(){
	history.back();
}
