function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("PlatformDB", 1);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;

      db.createObjectStore("offline_proposals", {
        keyPath: "id",
        autoIncrement: true,
      });
    };

    request.onsuccess = function (event) {
      resolve(event.target.result);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

export async function saveOfflineData(payload) {
  console.log("saveOfflineData() CALLED", payload);
  const db = await openDatabase();
  const transaction = db.transaction("offline_proposals", "readwrite");
  const store = transaction.objectStore("offline_proposals");

  store.add(payload);
}
export async function getOfflineData() {
  const db = await openDatabase();

  const transaction = db.transaction("offline_proposals", "readonly");
  const store = transaction.objectStore("offline_proposals");

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = function () {
      resolve(request.result);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}
