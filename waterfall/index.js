$(function () {
    var waterBasic = (function(){
        function init(){
            var nodeWidth = $(".item").outerWidth(true),  //获取每个应用的宽度（maigin+padding+border）
                colNum =parseInt( $(window).width() / nodeWidth ),//获取页面可以展示几个应用
                colSumHeight = []; //每列总高度
            console.log(colSumHeight);
            for (var i=0;i<colNum;i++) {
                colSumHeight.push(0)

            }

            $(".item").each(function(){
                var $cur = $(this),
                    idx = 0,
                    minSumHeight = colSumHeight[0];  // minSumHeight最短高度

                // 获取到solSumHeight中的最小高度
                for (var i=0;i<colSumHeight.length;i++) {
                    if (minSumHeight > colSumHeight[i]) {
                        console.log(minSumHeight);
                        console.log( colSumHeight[i]);
                        minSumHeight = colSumHeight[i];
                        idx = i;
                    }
                }

                // 设置各个item的css属性
                $cur.css({
                    left: nodeWidth*idx,
                    top: minSumHeight
                })

                // 更新solSumHeight
                colSumHeight[idx] = colSumHeight[idx] + $cur.outerHeight(true);
            })
        }


        // 设置窗口改变时也能重新加载
        $(window).on("resize", function(){
            init();
        })


        return {
            init: init
        }
    })();

    waterBasic.init();
})