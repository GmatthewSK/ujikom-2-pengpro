
document.addEventListener("DOMContentLoaded", function () {

    // NAVIGATION MENU
    const menuBtn = document.getElementById("menuBtn");
    const navigation = document.getElementById("navigation");

    if (menuBtn && navigation) {

        menuBtn.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // CAREER ACTION PLAN CHECKLIST
    const checkboxes = document.querySelectorAll(
        '.task-check input[type="checkbox"]'
    );

    checkboxes.forEach(function (checkbox, index) {

        const storageKey = "career-task-" + index;

        checkbox.checked =
            localStorage.getItem(storageKey) === "true";

        checkbox.addEventListener("change", function () {

            localStorage.setItem(
                storageKey,
                checkbox.checked
            );

        });

    });

});
