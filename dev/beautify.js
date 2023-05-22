const beautify = (function(){

  
    function addModal(option){

        let { title, content, button_title, show_footer, duration, modal_name } = option

        title = title == null ? "Default title" : title
        content = content == null ? "Default content" : content
        button_title = button_title == null ? "OK" : button_title
        show_footer = show_footer == null ? false : true
        duration = duration == null ? "5000" : duration
        modal_name = modal_name == null ? create_random_modal_name() : modal_name


        let footer_content = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">${button_title}</button>`;

        let modalCode = `<div class="modal" tabindex="-1" id='beautify-modal'>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>${content}</p>
            </div>
            <div class="modal-footer">
              ${show_footer == true ? footer_content : ''}
            </div>
          </div>
        </div>
      </div>`;
      

      let divElement = document.createElement("div")
      divElement.innerHTML = modalCode;
      document.body.appendChild(divElement)
      $(`#beautify-modal`).modal('show')


        console.log(modal_name)

        return modal_name


    
    }


    function create_random_modal_name(){
        //use date
        const date = new Date()
        let current_time = date.getTime();

        modal_name = `modal_`+current_time

        //checks

        return modal_name



    }

    const removeModal = () => {

    }

    const addSpinner = () => {

    }

    const removeSpinner = () => {

    }



    return {
        addModal: addModal
    }




}());

window.beautify = beautify