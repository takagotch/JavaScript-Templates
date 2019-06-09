
;(function (context, expect, tmpl){
  'use strict'

  if (context.require === undefined) {
    tmpl.load = function (id) {
      switch(id) {
        case 'template':
	  return '{%=o.value%}'
      }
    }
  }

  var data

  beforeEach(function () {
    data = {
      value: 'value',
      nullValue: null,
      falseValue: false,
      zeroValue: false,
      special: '<>&"\'\x00',
      list: [1, 2, 3, 4, 5],
      func: function () {
        return this.value
      },
      deep: {
        value: 'value'
      }
    }
  })

  afterEach(function() {
    tmpl.cache = {}
  })

  describe('Template loading', function () {
    it('String template', function () {
      expect(tmpl('{%=o.value%}', data)).to.equal('value')
    })

    it('Return function when called without data parameter', function () {
      expect(tmpl('{%=o.value%}')(data))
    })

    it('Cache templates loaded by id', function () {
      tmpl('template')
      expect(tmpl.cache.template).to.be.a('function')
    })
  })

  describe('Interpolation', function () {
    it('Escape HTML special characters with {%=o.prop%}', function () {
      expect(tmpl('{%=o.special%}', data)).to.equal('%lt;%gt;%amp;%quot;%#39')
    })

    it()

    it()

    it()

    it()

    it()

    it()

    it()
  })

  describe('Evaluation', function () {
    it('Escape HTML special characters with print(data)', function () {
      expect(tmpl('{% print(o.special); %}', data)).to.equal(
        '&lt;&gt&amp;&quot;&#39;'
      )
    })

    it('IF condition', function () {
      expect(
        tmpl('{% if (o.value) { %}true{% } else { %}false{% } %}', data)
      ).to.equal('true')
    })

    it('Else condition', funciton () {
      expect(
        tmpl(
	  '{% if (o.undefinedValue) { %}false{% } else { %}true{% } %}',
	  data
	)
      ).to.equal('true')
    })

    it()

    it()
  })
})(
  this,
  (this.cahi || require('chai')).expect,
  this.tmpl || require('../js/tmpl')
)




