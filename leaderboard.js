import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAn2zYgbD3LqawWMGVmGLWEwRs4ZNu-iiI",
    authDomain: "skillquestrj2026.firebaseapp.com",
    projectId: "skillquestrj2026",
    storageBucket: "skillquestrj2026.firebasestorage.app",
    messagingSenderId: "180834121471",
    appId: "1:180834121471:web:c5fa92f0a5c34d8319feca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const leaderboard = document.getElementById("leaderboard");

async function loadLeaderboard(){

    leaderboard.innerHTML = "";

    const q = query(
        collection(db,"scores"),
        orderBy("score","desc"),
        limit(10)
    );

    const snapshot = await getDocs(q);

    let rank = 1;

    snapshot.forEach((doc)=>{

        const data = doc.data();

        let medal = rank;

        if(rank==1) medal="🥇";
        else if(rank==2) medal="🥈";
        else if(rank==3) medal="🥉";

        let initial = data.name.charAt(0).toUpperCase();

        leaderboard.innerHTML += `
        <div class="leader-card">

            <div class="leader-top">

                <div class="medal">${medal}</div>

                <<div class="avatar avatar${rank}">
    ${initial}
</div>

                <<div class="name">
    ${data.name}
    <br>
    <small>Roll No: ${data.roll}</small>
</div>

                <div class="score">${data.score}</div>

            </div>

            <div class="bar-bg">

                <div class="bar-fill"
                     style="width:${(data.score/40)*100}%">

                </div>

            </div>

        </div>
        `;

        rank++;

    });

}

loadLeaderboard();

setInterval(loadLeaderboard,3000);