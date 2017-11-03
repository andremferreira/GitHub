angular.module('primeiraApp').component('contentHeader', {
   bindings: {
      name: '@',
      small: '@',
      imagem: '@',
      icoimgsP: '@',
      txtPosIco: '@',
      icoimgs: '@',
      preInf: '@',
      posInf: '@',
      tabTitle:'@',
      stlI: '@',
   },controller: [
    'pMaiuscula',
    function(pMaiuscula) {
      this.$onInit = () => this.pMaiusculaClasses = pMaiuscula.pUpper(this.small)
    }
  ],
   template: `
      <section class="content-header">
      <div>
      <div class="row box box-solid box-header with-border col-md-12">
          <h1><i class="{{ $ctrl.icoimgsP }}" style="{{ $ctrl.stlI}} "></i>{{ $ctrl.txtPosIco }}{{ $ctrl.name }}
          <small><i class="{{ $ctrl.icoimgs}}"></i>{{ $ctrl.preInf }}{{ $ctrl.pMaiusculaClasses }}{{ $ctrl.posInf }}</small></h1>
        </div>
      </div>
      </section>
   `
});
