ZNET.home = {
    init: function() {
        /*----------------------------------------------------*/
        /*  OWL CAROUSEL
    /*----------------------------------------------------*/

        $("#owl-demo").owlCarousel({
            items: 4,
            lazyLoad: true,
            navigation: true
        });

        /*----------------------------------------------------*/
        /*  Revolution Slider Nav Arrow Show Hide
/*----------------------------------------------------*/

        jQuery('.fullwidthbanner-container').hover(function() {
                jQuery('.tp-leftarrow').stop().animate({
                    "opacity": 1
                }, 'easeIn');
                jQuery('.tp-rightarrow').stop().animate({
                    "opacity": 1
                }, 'easeIn');
            }, function() {
                jQuery('.tp-leftarrow').stop().animate({
                    "opacity": 0
                }, 'easeIn');
                jQuery('.tp-rightarrow').stop().animate({
                    "opacity": 0
                }, 'easeIn');
            }

        );



        jQuery('.slider-wrapper').hover(function() {
                jQuery('.nivo-prevNav').stop().animate({
                    "opacity": 1
                }, 'easeIn');
                jQuery('.nivo-nextNav').stop().animate({
                    "opacity": 1
                }, 'easeIn');
            }, function() {
                jQuery('.nivo-prevNav').stop().animate({
                    "opacity": 0
                }, 'easeIn');
                jQuery('.nivo-nextNav').stop().animate({
                    "opacity": 0
                }, 'easeIn');
            }

        );

        

        /*----------------------------------------------------*/
        /*  Carousel Section
/*----------------------------------------------------*/

        jQuery('.portfolio-carousel').carousel({
            interval: false,
            wrap: false
        });


        jQuery('.client-carousel').carousel({
            interval: false,
            wrap: false
        });

        jQuery('.testimonials-carousel').carousel({
            interval: 5000,
            pause: "hover"
        });




        $("a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            /* fast/slow/normal */
            slideshow: 5000,
            /* false OR interval time in ms */
            autoplay_slideshow: false,
            /* true/false */
            opacity: 0.80,
            /* Value between 0 and 1 */
            show_title: true,
            /* true/false */
            allow_resize: true,
            /* Resize the photos bigger than viewport. true/false */
            default_width: 500,
            default_height: 344,
            counter_separator_label: '/',
            /* The separator for the gallery counter 1 "of" 2 */
            theme: 'pp_default',
            /* light_rounded / dark_rounded / light_square / dark_square / facebook */
            horizontal_padding: 20,
            /* The padding on each side of the picture */
            hideflash: false,
            /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
            wmode: 'opaque',
            /* Set the flash wmode attribute */
            autoplay: true,
            /* Automatically start videos: True/False */
            modal: false,
            /* If set to true, only the close button will close the window */
            deeplinking: true,
            /* Allow prettyPhoto to update the url to enable deeplinking. */
            overlay_gallery: true,
            /* If set to true, a gallery will overlay the fullscreen image on mouse over */
            keyboard_shortcuts: true,
            /* Set to false if you open forms inside prettyPhoto */
            changepicturecallback: function() {},
            /* Called everytime an item is shown/changed */
            callback: function() {},
            /* Called when prettyPhoto is closed */
            ie6_fallback: true,
            markup: '<div class="pp_pic_holder"> \
                        <div class="ppt">&nbsp;</div> \
                        <div class="pp_top"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                        <div class="pp_content_container"> \
                            <div class="pp_left"> \
                            <div class="pp_right"> \
                                <div class="pp_content"> \
                                    <div class="pp_loaderIcon"></div> \
                                    <div class="pp_fade"> \
                                        <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                        <div class="pp_hoverContainer"> \
                                            <a class="pp_next" href="#">next</a> \
                                            <a class="pp_previous" href="#">previous</a> \
                                        </div> \
                                        <div id="pp_full_res"></div> \
                                        <div class="pp_details"> \
                                            <div class="pp_nav"> \
                                                <a href="#" class="pp_arrow_previous">Previous</a> \
                                                <p class="currentTextHolder">0/0</p> \
                                                <a href="#" class="pp_arrow_next">Next</a> \
                                            </div> \
                                            <p class="pp_description"></p> \
                                            {pp_social} \
                                            <a class="pp_close" href="#">Close</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div> \
                            </div> \
                        </div> \
                        <div class="pp_bottom"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                    </div> \
                    <div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \
                                <a href="#" class="pp_arrow_previous">Previous</a> \
                                <div> \
                                    <ul> \
                                        {gallery} \
                                    </ul> \
                                </div> \
                                <a href="#" class="pp_arrow_next">Next</a> \
                            </div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: '',
            social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href=' + location.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
        });

        /*----------------------------------------------------*/
        /*  Revolution Slider Triggering
/*----------------------------------------------------*/



        if (jQuery.fn.cssOriginal != undefined)
            jQuery.fn.css = jQuery.fn.cssOriginal;
        jQuery('.fullwidthbanner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 470,

            onHoverStop: "on",
            // Stop Banner Timet at Hover on Slide on/off
            thumbWidth: 100,
            // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
            thumbHeight: 50,
            thumbAmount: 3,

            hideThumbs: 0,
            navigationType: "none",
            // bullet, thumb, none
            navigationArrows: "solo",
            // nexttobullets, solo (old name verticalcentered), none
            navigationStyle: "square",
            // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom

            navigationHAlign: "center",
            // Vertical Align top,center,bottom
            navigationVAlign: "top",
            // Horizontal Align left,center,right
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 0,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 0,
            soloArrowRightVOffset: 0,

            touchenabled: "on",
            // Enable Swipe Function : on/off


            stopAtSlide: -1,
            // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
            stopAfterLoops: -1,
            // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
            hideCaptionAtLimit: 0,
            // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
            hideAllCaptionAtLilmit: 0,
            // Hide all The Captions if Width of Browser is less then this value
            hideSliderAtLimit: 0,
            // Hide the whole slider, and stop also functions if Width of Browser is less than this value

            fullWidth: "on",

            shadow: 0 //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

        });

        /*----------------------------------------------------*/
        /*  Clients section Parallax
/*----------------------------------------------------*/

        jQuery('.client').parallax("50%", 0.1);
        jQuery('.service-reasons').parallax("50%", 0.1);

        jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
            overlay_gallery: false
        });

    }
}; //*END ZNET.HOME*/
