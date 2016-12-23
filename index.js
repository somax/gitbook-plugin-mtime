
module.exports = {

    // Extend templating filters
    filters: {
        toLocaleString: function(s) {
        	var dateStr = (new Date(s)).toLocaleString();
            return dateStr;
        }
    },

    // Hook process during build
    hooks: {
        "page:before": function(page) {
          page.content = page.content + '\n\n<p style="border-top: solid 1px #eee; color:#ccc; padding-top:10px; margin-top:90px;">最后更新：{{ file.mtime | toLocaleString }} </p>';
          return page;
        }
    }
};