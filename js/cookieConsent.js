const setCookiesBanner = () => {
    if (window.localStorage.getItem('cookiesConfirmed') != 'yes') {
        $('body').prepend('<div id = "cookiesConsentBanner">Do you like cookies? 🍪 By continuing to browse the site, you agree to my use of cookies.</div>')
        $('#cookiesConsentBanner').append('<button class = "cookiesConsentButton" onclick = "cookiesConfirmed()">Ok</button>')
        $('#cookiesConsentBanner').append('<button class = "cookiesConsentButton" onclick = "cookiesSettings()">Settings</button>')
    }
}

const cookiesConfirmed = () => {
    window.localStorage.setItem('cookiesConfirmed', 'yes')
    $('#cookiesConsentBanner').remove()
}

const cookiesSettings = () => {
    const content = '<div class = "modal-first-h1">Strictly necessary cookies</div>'
                  + '<p>These cookies are essential for normal operation of the website and are always turned on.</p>'
                  + '<div class = "modal-h1">Optional cookies</div>'
                  + '<div class = "modal-option">'
                  + '   <div class = "modal-switch"><label class = "switch"><input type = "checkbox" checked id = "analyticsToggle"><span class = "slider round"></span></label></div>'
                  + '   <div class = "modal-option-explanation">These cookies help me understand how you use the website to make it even better.</div>'
                  + '</div>'
                  + '<div class = "modal-buttons">'
                  + '   <button class = "modal-button" onclick = "saveCookiesSettings()">Save settings</button>'
                  + '</div>'
    showModalDialog(content)
    if (window.localStorage.getItem('analyticsConfirmed') == 'no')
        $('#analyticsToggle').prop('checked', false)
}

const saveCookiesSettings = () => {
    if ($('#analyticsToggle').prop('checked'))
        window.localStorage.setItem('analyticsConfirmed', 'yes')
    else
        window.localStorage.setItem('analyticsConfirmed', 'no')
    window.localStorage.setItem('cookiesConfirmed', 'yes')
    if ($('#cookiesConsentBanner').length > 0)
        $('#cookiesConsentBanner').remove()
    closeModal()
}
