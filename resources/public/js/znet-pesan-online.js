ZNET.pesan_online = {
    init: function() {
    /*----------------------------------------------------*/
    /*  FORM INPUT VOUCHER
    /*----------------------------------------------------*/ 
        console.log('fired');
        $('#keteranganindomaret').html('');
        document.getElementById('radioindomaret').onclick=function(){
            $('#keteranganindomaret').html('<p> Kamu bisa langsung bayar di Indomaret terdekat hanya dengan membawa slip pemesanan atau menyebutkan kode referensi. </p> <p> 1. Pesan voucher di website zenius.net </p> <p> 2. Setelah pemesanan di website zenius.net, kamu akan menerima sebuah slip pemesanan barang, salah satunya terdapat barcode (atau kode referensi) </p> <p> 3. Slip pemesanan barang tersebut dapat kamu bawa (print) atau kamu cacat kode referensinya lalu kamu dapat membayar di Indomaret pilihan kamu dengan menunjukan slip pemesanan barang atau dengan menyebutkan kode referensi yang terdapat pada slip pemesanan yang kamu terima. </p> <p> 4. Setelah melakukan pembayaran di counter Indomaret, kamu akan menerima kode voucher zenius.net yang dikirimkan melalui email atau SMS. </p>');
        };
        document.getElementById('radiotransfer').onclick=function(){
            $('#keteranganindomaret').html('');
        };
    }
};