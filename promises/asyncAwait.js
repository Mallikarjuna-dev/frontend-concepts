function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random() > 0.5;
            if (num) {
                resolve("Fetched data successfully");
            } else {
                reject("Error, server failed");
            }
        }, 1000);
    });
}

async function fetchDataHandler() {
    try {
        const res = await fetchData();
        console.log(res);
    } catch (error) {
        console.log("Error fetching data:", error)
    }
}

fetchDataHandler();