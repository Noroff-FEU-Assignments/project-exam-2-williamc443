import { BASE_URL } from "../constants/Api";
import displayMessage from "../common/FormError"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const articelUrl = BASE_URL + "artikkels/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#FromGridtitle");
const subject = document.querySelector("#formGridSubject");
const introduction = document.querySelector("#formGridintroduction");
const content = document.querySelector("#formGridContent");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

(async function EditArticel() {
    try {
        const response = await fetch(articelUrl);
        const details = await response.json();

        console.log(details);

        // title.value = details.name;
        // subject.value = details.subject;
        // introduction.value = details.introduction;
        // content.value = details.content
        // idInput.value = details.id;

        console.log(details);
    } catch (error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();