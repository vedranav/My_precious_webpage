(function () {
    if (window.localStorage.getItem('cookiesConfirmed') != 'yes' && $("#cookieConsentBanner").length)
        $('#cookieConsentBanner').css('display', 'block')
})();

const cookiesConfirmed = () => {
    window.localStorage.setItem('cookiesConfirmed', 'yes')
    $('#cookieConsentBanner').css('display', 'none')
}

const cookiesSettings = () => {
    $('#cookiesSettings').css('display', 'flex')
    if (window.localStorage.getItem('analyticsConfirmed') == 'no')
        $('#analyticsToggle').prop('checked', false)
}

const saveCookiesSettings = () => {
    if ($('#analyticsToggle').prop('checked'))
        window.localStorage.setItem('analyticsConfirmed', 'yes')
    else
        window.localStorage.setItem('analyticsConfirmed', 'no')
    window.localStorage.setItem('cookiesConfirmed', 'yes')
    if ($('#cookieConsentBanner').length)
        $('#cookieConsentBanner').css('display', 'none')
    $('#cookiesSettings').css('display', 'none')
}
