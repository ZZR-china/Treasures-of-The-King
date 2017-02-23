var t = Tableajax('ajax',{
                rows: '#select',
                keyword: '.input-text',
                page: '.current',
                paginate: '.foowala_paginate',
                paginatetype: 'button',
                table: '#ajax-data',
                url: '/categorys',
                ajaxtype: 'put'
        });