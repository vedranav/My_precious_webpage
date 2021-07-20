---
layout: page
title: Contact
permalink: /contact/
icon: envelope
type: page
---

<div id = "contactForm">
    <form action="https://send.pageclip.co/{{site.pageclip_contact_form_id}}" class="pageclip-form" method="post">
        <label for = "name">Name</label>
        <input type = "text" id = "name" name = "name" required />

        <label for = "email">Email</label>
        <input type = "email" id = "email" name = "email" required />

        <label for = "subject">Subject</label>
        <input type = "text" id = "subject" name = "subject" required />

        <label for = "message">Message</label>
        <textarea id = "message" name = "body" required></textarea>

        <button type = "submit" class = "pageclip-form__submit--dark-loader">
            <span>Submit</span>
        </button>
    </form>
</div>
