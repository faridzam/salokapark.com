import membershipImage from "./membership.jpg";

export const mediaMembership = [membershipImage];
export const membership = [
    {
        nama: 'membership',
        Image: membershipImage,
        title: 'Membership',
        deskripsi: '<p style="text-align:justify">Berwisata lebih hemat dengan Membership Saloka. Hanya dengan Rp. 250.000,- sudah bisa bebas main ke Saloka selama 6 bulan.&nbsp;</p><p style="text-align:justify">&nbsp;</p><p style="text-align:justify"><strong>Syarat dan Ketentuan Membership Saloka:</strong></p><p style="text-align:justify">1. Membership berlaku hanya untuk 1 orang saja (tidak bisa digunakan untuk bergantian)<br />2. Membership berlaku selama 6 bulan dimulai sejak pembayaran berhasil dilakukan. &nbsp;&nbsp;<br />3. Membership merupakan tiket terusan yang dapat digunakan pada hari weekdays maupun weekend.<br />4. Membership tidak berlaku untuk tiket parkir, resto atau tenant dan toko merchandise.<br />5. Membership tidak berlaku jalur khusus untuk antrean wahana.<br />6. Membership berbentuk kartu PVC yang berisikan identitas&nbsp;diri&nbsp;pengguna</p>',
    },
];
export const eventByIndex = index => events[index];
export const mediaByIndex = index => media[index % media.length];