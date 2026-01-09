import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

onAuthStateChanged(auth, async (user)=>{
  if(!user) return;

  const q = query(
    collection(db,"users",user.uid,"attempts"),
    orderBy("createdAt","desc"),
    limit(1)
  );

  const snap = await getDocs(q);
  if(snap.empty) return;

  const data = snap.docs[0].data();
  document.getElementById("scoreText").textContent =
    `${data.score} / ${data.total}`;

  const box = document.getElementById("breakdown");
  box.innerHTML = "";

  Object.entries(data.wrongByTopic).forEach(([topic,wrong])=>{
    const correct = data.total - wrong;
    const pct = Math.round((correct/data.total)*100);

    box.innerHTML += `
      <div class="bar">
        <label>
          <span>${topic}</span>
          <span>${pct}%</span>
        </label>
        <div class="track">
          <div class="fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  });
});
