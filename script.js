document.getElementById('shiftForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // קבלת ערכים מהטופס
    const morningTasks = parseInt(document.getElementById('morningTasks').value);
    const afternoonTasks = parseInt(document.getElementById('afternoonTasks').value);
    const nightTasks = parseInt(document.getElementById('nightTasks').value);
    const morningWorkers = parseInt(document.getElementById('morningWorkers').value);
    const afternoonNightWorkers = parseInt(document.getElementById('afternoonNightWorkers').value);
    
    // חישוב אילוצים לבוקר
    let morningConstraints = morningTasks / morningWorkers;
    morningConstraints = Number.isInteger(morningConstraints) 
        ? morningConstraints + 1 
        : Math.ceil(morningConstraints) + 1;
    morningConstraints = Math.max(morningConstraints, 5); // מינימום 5
    
    // חישוב אילוצים לצהריים
    let afternoonConstraints = afternoonTasks / afternoonNightWorkers;
    afternoonConstraints = Number.isInteger(afternoonConstraints) 
        ? afternoonConstraints + 1 
        : Math.ceil(afternoonConstraints) + 1;
    afternoonConstraints = Math.max(afternoonConstraints, 4); // מינימום 4
    
    // חישוב אילוצים ללילה
    let nightConstraints = nightTasks / afternoonNightWorkers;
    nightConstraints = Number.isInteger(nightConstraints) 
        ? nightConstraints + 1 
        : Math.ceil(nightConstraints) + 1;
    nightConstraints = Math.max(nightConstraints, 3); // מינימום 3
    
    // חישוב ממוצע משמרות לעובד
    const morningAverage = morningTasks / morningWorkers;
    const afternoonNightAverage = (afternoonTasks + nightTasks) / afternoonNightWorkers;
    const totalAverage = Math.round(morningAverage + afternoonNightAverage);
    
    // הצגת תוצאות
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p class="text-lg font-semibold">תוצאות:</p>
        <p>אילוצים לבוקר לכל עובד: <span class="font-bold">${morningConstraints}</span></p>
        <p>אילוצים לצהריים לכל עובד: <span class="font-bold">${afternoonConstraints}</span></p>
        <p>אילוצים ללילה לכל עובד: <span class="font-bold">${nightConstraints}</span></p>
        <p>ממוצע משמרות לעובד: <span class="font-bold">${totalAverage}</span></p>
    `;
});