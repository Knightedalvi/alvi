document.addEventListener("DOMContentLoaded", function () {
    const channelMetricsData = [
        { channel: "CHAT", avg_handle_time: 14226.616499999998, contacts_handled: 2 },
        { channel: "VOICE", avg_handle_time: 451.50627906976746, contacts_handled: 43 },
    ];

    const tableBody = document.getElementById("channel-metrics-table");

    channelMetricsData.forEach((metric) => {
        let row = document.createElement("tr");

        let channelCell = document.createElement("td");
        channelCell.textContent = metric.channel;

        let handleTimeCell = document.createElement("td");
        handleTimeCell.textContent = metric.avg_handle_time;

        let contactsHandledCell = document.createElement("td");
        contactsHandledCell.textContent = metric.contacts_handled;

        row.appendChild(channelCell);
        row.appendChild(handleTimeCell);
        row.appendChild(contactsHandledCell);
        tableBody.appendChild(row);
    });
});

function backToQueuePerformance() {
    alert("Navigating back to Queue Performance...");
    // Here, you can add window.location.href = 'queueperformance.html';
}
