"use client"

const UpgradePremiumBtn = () => {
    const updateToPremium = async () => {

        const res = await fetch("/api/checkout_sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        // console.log(data);
        if (data?.url) {
            window.location.href = data.url
        }

    }
    return (
        <button
            onClick={updateToPremium}
            className="mt-6 cursor-pointer rounded-2xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
            Upgrade Now
        </button>
    );
};

export default UpgradePremiumBtn;