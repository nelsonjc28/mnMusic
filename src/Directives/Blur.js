const Blur = {}

function setBlur(el, binding) {

  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(button => {
    if (!binding.value) {
      button.setAttribute('disabled', true)
    } else {
      button.removeAttribute('disabled')
    }
  })
}

Blur.install = function (Vue) {
  Vue.directive('blur', {
    bind(el, binding) {
      setBlur(el, binding)
    }
  })

}

export default Blur
