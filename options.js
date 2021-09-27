 
// Попытка сохранить опции
let btn_sbm_options = document.querySelector('#submit-options')    
btn_sbm_options.addEventListener('click', () => { 

    // Получение названия
    let input_header = document.querySelector('input[name="header"]').value
        chrome.storage.sync.set({ header: input_header });
        $('.options-status').removeClass('d-none')
        setTimeout( () => {
            $('.options-status').addClass('d-none')
        }, 3000)

    // Сохранение состояний чекбоксов
    let y = {}
        document.querySelectorAll('#options input[type="checkbox"]').forEach( element => {
            let elm = $( element )
            let key = elm.attr('name')
            let value = ( ( elm.prop('checked') ) ? 'on' : 'off' )
            y[key] = value
        })
        chrome.storage.sync.set( y );

})

// Загрузка и установка существующих настроек и опций
chrome.storage.sync.get([ 'header' ], function( result ) {
    if( result.header !== '' ){
        $('input[type="text"][name="header"]').val( result.header )
    }
});
