$(document).ready(function () {
    var $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet", true);


});


var tl = gsap.timeline();
tl.to(".loading", {
    opacity: 0,
    delay: 2.7,

})
    .to(".loader", {
        opacity: 0,
        duration: 1,
        ease: "Expo.easeInOut",
    })
    .to(".loader", {
        y: "-100%",
        duration: 1,
    },
        "up"
    )
    .to(
        ".svgwala",
        {
            opacity: 1,
            delay: -1.7,
            ease: "Expo.easeInOut",
        },
        "drone"
    )
    .to(
        "#dotted",
        {
            opacity: 1,
            delay: -1.8,
            ease: "Expo.easeInOut",
        },
        "drone"
    )
    .to(
        "#drone",
        {
            opacity: 1,
            scale: 2,
            delay: -1.4,
            ease: "Expo.easeInOut",
            rotationY: "+=15",
            duration: 3,
            rotationX: "+=15",
            rotationZ: "+=15",

        },
        "up"
    )
    .from(
        "#garuda-g, #garuda-a, #garuda-r, #garuda-u, #garuda-d,#garuda-a2",
        {
            opacity: 0,
            duration: 1,
            scale: 0,
            top: "40%",
            left: "47%",

        },
        "up"
    );

var tl2 = gsap.timeline();
document.querySelectorAll("#explore").forEach(function (elem) {
    elem.addEventListener("click", function () {
        tl2
            .to(
                "#garuda-g",
                {
                    left: "-15%",
                    top: "-15%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )
            .to(
                "#garuda-a",
                {
                    top: "-20%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )
            .to(
                "#garuda-r",
                {
                    left: "115%",
                    top: "-20%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )
            .to(
                "#garuda-u",
                {
                    left: "115%",
                    top: "110%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )
            .to(
                "#garuda-d",
                {
                    left: "35%",
                    top: "110%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,
                },
                "sw"
            )
            .to(
                "#garuda-a2",
                {
                    left: "-20%",
                    top: "-20%",
                    scale: "2",
                    rotate: "25deg",
                    ease: "ease.out",
                    duration: 1,
                    opacity: 0,

                },
                "sw"
            )
            .to(
                "#drone", {
                width: "80vw",
                top: "-10%",
                rotate: "360deg",
                ease: "ease.out",
                duration: 1,
                opacity: 0,
                delay: "-1",
            })
            .to(
                "#dotted",
                {
                    opacity: 0,
                    delay: "-1"
                },
            )
            .to(
                ".svgwala", {
                opacity: 0,
            });
    });
});

// link ki hai again wali html 

function example() {
    window.location.href = "again.html";
}
function product() {
    window.location.href = "product.html";
}
function Home() {
    window.location.href = "again.html";
}

// 3rd again wali java script

var tl7 = gsap.timeline();
tl7.from(
    ".main-abhishek",
    {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
    },
    "anim3"
);
tl7
    .from(
        ".front-page-img",
        {
            opacity: "0",
            ease: "expo.inout",
            duration: 1,
        },
        "anim3"
    )
    .from(
        ".front-text",
        {   
            height:"0%",
            opacity: "0",
            ease: "expo.inout",
            duration: 1.2,
        },
        "anim3"
    )
    .from(
        "#line-effect-3",
        {
            opacity: "0",
            ease: "expo.inout",
            duration: 1,
        },
        "anim3"
    )
    .from(
        "#line-effect-1",
        {
            height: "0%",
            ease: "expo.inout",
            duration: 2,
        },
        "anim1"
    )
    .from(
        "#line-effect-2",
        {
            height: "0%",
            ease: "expo.inout",
            duration: 1,
        },
        "anim2"
    )
    .from(
        ".img-one",
        {
            height: "0%",
            ease: "expo.inout",
            ease: "ease.out",
            duration: 1.5,
        },
        "anim1"
    )
    .from(
        ".drone-inmg",
        {
            height: "0%",
            ease: "expo.inout",
            ease: "ease.out",
            duration: 1.5,
        },
        "anim1"

    )
    .from(
        ".mandit",
        {
            width: "0%",
            opacity: 0,
            ease: "expo.inout",
            duration: 1,
        },
        "anim1"
    )
    .from(
        ".mandit-2",
        {
            height: "0%",
            opacity: 0,
            ease: "expo.inout",
            duration: 1,
        },
        "anim1"
    )
    .from(
        ".main-txt-front",
        {
            opacity: 0,
            ease: "expo.inout",
            delay: -0.5,
            duration: 1,
        },
        "anim2"
    )
    .from(
        ".main-text-intro",
        {
            opacity: 0,
            ease: "expo.inout",
            delay: 0.5,
            duration: 0.5,
        },
        "anim2"
    )
    .from(
        "#circle",
        {
            opacity: 0,
            ease: "expo.inout",
            duration: 2,
        },
        "anim2"
    )
    .from(
        "#nav",
        {
            top: -50,
            opacity: 0,
            ease: "expo.inout",
            duration: 1,
        },
        "anim2"
    );

document
    .querySelector("#cntr-nav .ri-menu-line")
    .addEventListener("click", function () {
        document.querySelector(".upar-menu").style.top = "0%";
        document.querySelector(".upar-menu .ri-close-fill").style.display =
            "initial";
        document.querySelector("#cntr-nav .ri-menu-line").style.display = "none";
    });

document
    .querySelector(".upar-menu .ri-close-fill")
    .addEventListener("click", function () {
        document.querySelector(".upar-menu").style.top = "-105%";
        document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
        document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
    });

document.querySelector("#abhishek").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "0%";
    document.querySelector("#abhishek").style.cursor = "pointer";
});
document.querySelector("#amarjeet").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
    document.querySelector("#amarjeet").style.cursor = "pointer";
});
document.querySelector("#rk").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
    document.querySelector("#rk").style.cursor = "pointer";
});
document.querySelector("#ak").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-150vh";
    document.querySelector("#ak").style.cursor = "pointer";
});



// video 3 ----------------------------


function dom() {
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
        var data =`https://i.postimg.cc/52xmT6dS/one.jpg
                https://i.postimg.cc/Kvhf700V/two.jpg
        https://i.postimg.cc/rFNJf842/4.jpg
        https://i.postimg.cc/YC2xVJNG/5.jpg
        https://i.postimg.cc/fbJfWmrM/6.jpg
        https://i.postimg.cc/8zybVtwy/7.jpg
        https://i.postimg.cc/9fKtD06Z/8.jpg
        https://i.postimg.cc/RFt1K9m8/9.jpg
        https://i.postimg.cc/XvcsbGk7/10.jpg
        https://i.postimg.cc/90jdBSFf/11.jpg
        https://i.postimg.cc/Hsc3LP9N/12.jpg
https://i.postimg.cc/xTw5Nys1/13.jpg
https://i.postimg.cc/CxbNGBtH/14.jpg
https://i.postimg.cc/QMsq0NZL/15.jpg
https://i.postimg.cc/bvT9MXqZ/17.jpg
https://i.postimg.cc/Px5Qn6q2/18.jpg
https://i.postimg.cc/W3Y6NMFj/19.jpg
https://i.postimg.cc/GtBPHHGD/20.jpg
https://i.postimg.cc/D0trsnPM/21.jpg
https://i.postimg.cc/KcVrCDhD/23.jpg
https://i.postimg.cc/ZKdFmvTt/24.jpg
https://i.postimg.cc/8zgdzk5F/25.jpg
https://i.postimg.cc/130Gnxnv/26.jpg
https://i.postimg.cc/pd2DK0KR/27.jpg
https://i.postimg.cc/3RNmcdLq/29.jpg
https://i.postimg.cc/9MkZ5CKQ/30.jpg
https://i.postimg.cc/VvbMz2PB/31.jpg
https://i.postimg.cc/xqDm8g0r/32.jpg
https://i.postimg.cc/VkF7y0Rs/33.jpg
https://i.postimg.cc/zBypRt13/35.jpg
https://i.postimg.cc/DZR6Qr26/36.jpg
https://i.postimg.cc/zvWjxyvr/37.jpg
https://i.postimg.cc/G3sqL5Q5/38.jpg
https://i.postimg.cc/5NBgvQD5/39.jpg
https://i.postimg.cc/NjQ4xfw3/41.jpg
https://i.postimg.cc/vZXv2FYc/42.jpg
https://i.postimg.cc/9fMYv801/43.jpg
https://i.postimg.cc/PqRQhW8H/44.jpg
https://i.postimg.cc/d1Zm0h8y/45.jpg
https://i.postimg.cc/XqMKBn8D/47.jpg
https://i.postimg.cc/WzMGMxYp/48.jpg
https://i.postimg.cc/rFkC8FzD/49.jpg
https://i.postimg.cc/1R6rhNRx/50.jpg
https://i.postimg.cc/Gt5cR08L/51.jpg
https://i.postimg.cc/2jcjhWHs/53.jpg
https://i.postimg.cc/pXmWZd4p/54.jpg
https://i.postimg.cc/HsFpPg13/55.jpg
https://i.postimg.cc/HLgTd9xy/56.jpg
https://i.postimg.cc/T1p6CkkZ/57.jpg
https://i.postimg.cc/sfNyvrxy/59.jpg
https://i.postimg.cc/tCnb6Mn6/60.jpg
https://i.postimg.cc/SxWpTYrN/61.jpg
https://i.postimg.cc/KzYS8qyR/62.jpg
https://i.postimg.cc/QtnL9QXS/63.jpg
https://i.postimg.cc/7hCFg5h4/65.jpg
https://i.postimg.cc/0jLLZ9Kw/66.jpg
https://i.postimg.cc/J4Xw0HSc/67.jpg
https://i.postimg.cc/wjYCmTpK/68.jpg
https://i.postimg.cc/VNDppqb1/69.jpg
https://i.postimg.cc/B6bk0jxF/71.jpg
https://i.postimg.cc/jC0FPvB6/72.jpg
https://i.postimg.cc/mZzZ3D0h/73.jpg
https://i.postimg.cc/2jsk0YDG/74.jpg
https://i.postimg.cc/qM2kYFBT/75.jpg
https://i.postimg.cc/Gmrc1j9s/77.jpg
https://i.postimg.cc/bvwpZNxy/78.jpg
https://i.postimg.cc/7LtD089g/79.jpg
https://i.postimg.cc/Jny8Q6YS/80.jpg
https://i.postimg.cc/BbHGr80g/81.jpg
https://i.postimg.cc/pTgHcfgr/82.jpg
https://i.postimg.cc/WpkjFykk/84.jpg
https://i.postimg.cc/BQf3xCTw/85.jpg
https://i.postimg.cc/RZXzx5jj/86.jpg
https://i.postimg.cc/pdrM2cvy/87.jpg
https://i.postimg.cc/ZqQt0PYH/88.jpg
https://i.postimg.cc/mDFx9cts/89.jpg
https://i.postimg.cc/0jgT08wJ/90.jpg
https://i.postimg.cc/1Rwh5Nk0/91.jpg
https://i.postimg.cc/rFT6dwTB/92.jpg
https://i.postimg.cc/3JFs2QJd/93.jpg
https://i.postimg.cc/t4RL5vYD/94.jpg
https://i.postimg.cc/Vk72H9tw/96.jpg
https://i.postimg.cc/hGfNFJ8d/97.jpg
https://i.postimg.cc/W4CCs2Sf/98.jpg
https://i.postimg.cc/Ss95swvQ/99.jpg
https://i.postimg.cc/8cB0dLGq/100.jpg
https://i.postimg.cc/mZQJGW98/102.jpg
https://i.postimg.cc/15sTm7cP/103.jpg
https://i.postimg.cc/28GtVd2W/104.jpg
https://i.postimg.cc/52tRvHRR/105.jpg
https://i.postimg.cc/t4mmzq0C/106.jpg
https://i.postimg.cc/W4FYWBjm/108.jpg
https://i.postimg.cc/Jhf69p4f/109.jpg
https://i.postimg.cc/G2v7rv4H/110.jpg
https://i.postimg.cc/3N7LwWG9/111.jpg
https://i.postimg.cc/6q0M4wLK/112.jpg
https://i.postimg.cc/HW4Zh4GN/113.jpg
https://i.postimg.cc/VLfGQrmk/114.jpg
https://i.postimg.cc/NfdNgsj7/115.jpg
https://i.postimg.cc/K840j6KX/116.jpg
https://i.postimg.cc/nh50D37X/117.jpg
https://i.postimg.cc/7L2XMSMm/118.jpg
https://i.postimg.cc/qRHwmg10/120.jpg
https://i.postimg.cc/3RjBz7qG/121.jpg
https://i.postimg.cc/mkbwsJx5/122.jpg
https://i.postimg.cc/wM0kT2gT/123.jpg
https://i.postimg.cc/v8zhzYfF/124.jpg
https://i.postimg.cc/wTjV4CQt/125.jpg
https://i.postimg.cc/157Kkvvv/126.jpg
https://i.postimg.cc/YC4xMQVM/127.jpg
https://i.postimg.cc/cLVBHryY/128.jpg
https://i.postimg.cc/j5T6HmjS/129.jpg
https://i.postimg.cc/YSYfmMMP/130.jpg
https://i.postimg.cc/bJRx3gGH/132.jpg
https://i.postimg.cc/NFf1VXmh/133.jpg
https://i.postimg.cc/BbYxGvBj/134.jpg
https://i.postimg.cc/RCX1tPxv/135.jpg
https://i.postimg.cc/FszyVjh3/136.jpg
https://i.postimg.cc/Fs6jW7Kq/138.jpg
https://i.postimg.cc/Z5y614Bq/139.jpg
https://i.postimg.cc/nLbqxgBG/140.jpg
https://i.postimg.cc/YS6YCRxK/141.jpg
https://i.postimg.cc/2y6ZTDNr/142.jpg
https://i.postimg.cc/Y98F1SVd/143.jpg
https://i.postimg.cc/nzn7jmds/144.jpg
https://i.postimg.cc/90nqnncT/145.jpg
https://i.postimg.cc/BZYDbX26/146.jpg
https://i.postimg.cc/5NDC5T7W/147.jpg
https://i.postimg.cc/X7r5C4gg/148.jpg
https://i.postimg.cc/nh7Q32gj/150.jpg
https://i.postimg.cc/g0HLWJYG/151.jpg
https://i.postimg.cc/FRFds4R3/152.jpg
https://i.postimg.cc/sXnBMNQ8/153.jpg
https://i.postimg.cc/VvdJnWXN/154.jpg
https://i.postimg.cc/6qgy04hf/156.jpg
https://i.postimg.cc/J72DmSWH/157.jpg
https://i.postimg.cc/zXHLfpJt/158.jpg
https://i.postimg.cc/XYMrBFqV/159.jpg
https://i.postimg.cc/6pdyr34C/160.jpg
https://i.postimg.cc/Bv4tM02k/162.jpg
https://i.postimg.cc/mrjkn5wD/163.jpg
https://i.postimg.cc/Y9S0Bznx/164.jpg
https://i.postimg.cc/zvbfVX1b/165.jpg
https://i.postimg.cc/FzMHc59P/166.jpg
https://i.postimg.cc/WpC3xrMM/168.jpg
https://i.postimg.cc/YqF9793T/169.jpg
https://i.postimg.cc/W1P41vYz/170.jpg
https://i.postimg.cc/qvXvt5WL/171.jpg
https://i.postimg.cc/6QW5ChXN/172.jpg
https://i.postimg.cc/9fLXbqmw/174.jpg
https://i.postimg.cc/DZmvMy0j/175.jpg
https://i.postimg.cc/853pQQr1/176.jpg
https://i.postimg.cc/L51HmCzj/177.jpg
https://i.postimg.cc/PNndJW49/178.jpg
https://i.postimg.cc/QN95BjmJ/179.jpg
https://i.postimg.cc/2jsWhgXR/180.jpg
https://i.postimg.cc/hPVdrMHJ/181.jpg
https://i.postimg.cc/2SmBXhD0/182.jpg
https://i.postimg.cc/2SwBpyjr/183.jpg
https://i.postimg.cc/9fQwc2zT/184.jpg
https://i.postimg.cc/d0Nk1fTf/185.jpg
https://i.postimg.cc/ZR99yL85/186.jpg
https://i.postimg.cc/XJTrKyLc/187.jpg
https://i.postimg.cc/BbHXmQwW/188.jpg
https://i.postimg.cc/FFLdrDFP/189.jpg
https://i.postimg.cc/0216bDb9/190.jpg
https://i.postimg.cc/02GzmjwD/191.jpg
https://i.postimg.cc/fRwJvscF/192.jpg
https://i.postimg.cc/zG03tQpf/193.jpg
https://i.postimg.cc/BvbbdCwB/194.jpg
https://i.postimg.cc/q7Fq0CPV/195.jpg
https://i.postimg.cc/bJ2JvwPG/196.jpg
https://i.postimg.cc/3rmN5N9V/198.jpg
https://i.postimg.cc/wMXjh47g/199.jpg
https://i.postimg.cc/ZntqvzYw/200.jpg
https://i.postimg.cc/3JhRKhcR/201.jpg
https://i.postimg.cc/4xNx95ZR/202.jpg
https://i.postimg.cc/TYcP1szc/203.jpg
https://i.postimg.cc/MpPKbQKM/204.jpg
https://i.postimg.cc/HLrWSkVS/205.jpg
https://i.postimg.cc/LXf9pQkL/206.jpg
https://i.postimg.cc/W4xNxcZs/207.jpg
https://i.postimg.cc/Vv8YL94T/208.jpg
https://i.postimg.cc/NfQg34K2/210.jpg
https://i.postimg.cc/nrGnssPL/211.jpg
https://i.postimg.cc/QNQ8YPdr/212.jpg
https://i.postimg.cc/RVGM4Hts/213.jpg
https://i.postimg.cc/XYJnJYcV/214.jpg
https://i.postimg.cc/13jsN1JD/216.jpg
https://i.postimg.cc/fbSZcqrp/217.jpg
https://i.postimg.cc/V6ywDBy6/218.jpg
https://i.postimg.cc/bJQhMD8R/219.jpg
https://i.postimg.cc/mkBsGLgW/230.jpg
https://i.postimg.cc/d36Ksbhk/232.jpg
https://i.postimg.cc/c1BWBnFx/233.jpg
https://i.postimg.cc/t4YHbmpJ/234.jpg
https://i.postimg.cc/Kvc2q8Wn/235.jpg
https://i.postimg.cc/4N8TrTCj/236.jpg
https://i.postimg.cc/wjZYjcjV/238.jpg
https://i.postimg.cc/tg6QZZ1H/239.jpg
https://i.postimg.cc/85d242BK/240.jpg
https://i.postimg.cc/fLh4xzXS/241.jpg
https://i.postimg.cc/C5mWTb2b/242.jpg
https://i.postimg.cc/C5FWQccF/243.jpg
https://i.postimg.cc/QNmLTrMV/244.jpg
https://i.postimg.cc/Kv867sKf/245.jpg
https://i.postimg.cc/TYNZtqg6/246.jpg
https://i.postimg.cc/QdBvw9JW/247.jpg
https://i.postimg.cc/vmfk8JjY/248.jpg
https://i.postimg.cc/NjWZcsdC/249.jpg
https://i.postimg.cc/TwxSKkMr/250.jpg
https://i.postimg.cc/k4yHKxqL/251.jpg
https://i.postimg.cc/brNBTsvr/252.jpg
https://i.postimg.cc/rsnYYMdJ/253.jpg
https://i.postimg.cc/SQD5K7ZM/254.jpg
https://i.postimg.cc/3JNq046b/255.jpg
https://i.postimg.cc/Fs6ByFXF/256.jpg
https://i.postimg.cc/g26BN9GV/257.jpg
https://i.postimg.cc/jj0318jG/258.jpg
https://i.postimg.cc/tg3vGhZ7/259.jpg
https://i.postimg.cc/W3sWNhg8/260.jpg
https://i.postimg.cc/sXKnvsJr/262.jpg
https://i.postimg.cc/nrz3mgdQ/263.jpg
https://i.postimg.cc/x84t357p/264.jpg
https://i.postimg.cc/FFWWvFRb/265.jpg
https://i.postimg.cc/kX2jgr60/266.jpg
https://i.postimg.cc/7YjKCBSf/268.jpg
https://i.postimg.cc/pL8qKDBk/269.jpg
https://i.postimg.cc/d1Q6MgcS/270.jpg
https://i.postimg.cc/76BVqXxP/271.jpg
https://i.postimg.cc/KjR5jLzP/272.jpg
https://i.postimg.cc/8c9m65Jq/273.jpg
https://i.postimg.cc/bNSTjQ48/274.jpg
https://i.postimg.cc/K8X5c1yT/275.jpg
https://i.postimg.cc/DwqPS72M/276.jpg
https://i.postimg.cc/MGqbRgHK/277.jpg
https://i.postimg.cc/85CRXWL2/278.jpg
https://i.postimg.cc/CK7C4JnC/279.jpg
https://i.postimg.cc/bJFQ7JTs/280.jpg
https://i.postimg.cc/cCgQ0S9T/281.jpg
https://i.postimg.cc/T1znP4Bx/282.jpg
https://i.postimg.cc/tRw3DsJc/283.jpg
https://i.postimg.cc/xTmKZ9b1/284.jpg
https://i.postimg.cc/htq9WN9b/286.jpg
https://i.postimg.cc/Nj7RgbDh/287.jpg
https://i.postimg.cc/HLYXj5vr/288.jpg
https://i.postimg.cc/yNL9Rd2v/289.jpg
https://i.postimg.cc/qRgKxrT0/290.jpg
https://i.postimg.cc/DZDXCNvG/292.jpg
https://i.postimg.cc/zvgR4kvc/293.jpg
https://i.postimg.cc/9XrKggtQ/294.jpg
https://i.postimg.cc/NGSV38p7/295.jpg
https://i.postimg.cc/CL8tSZ2y/296.jpg
https://i.postimg.cc/SxpPsS0n/297.jpg
https://i.postimg.cc/GmJ5TWrq/298.jpg
https://i.postimg.cc/k5JhQTg9/299.jpg
https://i.postimg.cc/TPtNCnKb/300.jpg
https://i.postimg.cc/Jnt6gtX2/301.jpg
https://i.postimg.cc/4dMLTZbN/302.jpg
https://i.postimg.cc/yxZf15vh/303.jpg
https://i.postimg.cc/05MX0MP6/304.jpg
https://i.postimg.cc/wTDWnCtg/305.jpg
https://i.postimg.cc/QN2448df/306.jpg
https://i.postimg.cc/T3Gkxtmm/307.jpg
https://i.postimg.cc/mgwmg7Nn/308.jpg
https://i.postimg.cc/9MvpnbCD/310.jpg
https://i.postimg.cc/NFm4qXjp/311.jpg
https://i.postimg.cc/jq7vJp4P/312.jpg
https://i.postimg.cc/PfLdfH9k/1.jpg
https://i.postimg.cc/5NL1v3f7/2.jpg
https://i.postimg.cc/HjGZdXKj/3.jpg
https://i.postimg.cc/y6wsk5C3/4.jpg
https://i.postimg.cc/7Z44N26x/5.jpg
https://i.postimg.cc/zGkr2GbT/6.jpg
https://i.postimg.cc/q7bd0DGR/7.jpg
https://i.postimg.cc/258fsNhM/8.jpg
https://i.postimg.cc/765rL1BN/10.jpg
https://i.postimg.cc/FRw5kf8X/11.jpg
https://i.postimg.cc/XqFMfj6G/12.jpg
https://i.postimg.cc/DfbKkg4v/13.jpg
https://i.postimg.cc/Dyk32X1q/14.jpg
https://i.postimg.cc/L6tKh8VG/15.jpg
https://i.postimg.cc/Z5JkNz7n/16.jpg
https://i.postimg.cc/nh2yYSgk/17.jpg
https://i.postimg.cc/VNN37Bcc/18.jpg
https://i.postimg.cc/5tkDDYxQ/19.jpg
https://i.postimg.cc/XJGtWjJH/20.jpg
https://i.postimg.cc/Pxg9rgvt/21.jpg
https://i.postimg.cc/T1nSytnn/22.jpg
https://i.postimg.cc/v8nCSZCD/23.jpg
https://i.postimg.cc/15ZbxZZB/24.jpg
https://i.postimg.cc/qMXS4ZJT/25.jpg
https://i.postimg.cc/Cxht1H5f/26.jpg
https://i.postimg.cc/FHT6JdkC/27.jpg
https://i.postimg.cc/jjCF6xzx/28.jpg
https://i.postimg.cc/N0VPp341/29.jpg
https://i.postimg.cc/DZXpDxjR/30.jpg
https://i.postimg.cc/vTw2d5CT/31.jpg
https://i.postimg.cc/nrKRVCtk/32.jpg
https://i.postimg.cc/mZ76y6FH/33.jpg
https://i.postimg.cc/gkdtSqvB/34.jpg
https://i.postimg.cc/WbnWQF8p/35.jpg
https://i.postimg.cc/pLLGxWcf/36.jpg
https://i.postimg.cc/GmgMmW6Z/37.jpg
https://i.postimg.cc/QMBf963V/38.jpg
https://i.postimg.cc/0NLcppkn/40.jpg
https://i.postimg.cc/0QDZZbrs/41.jpg
https://i.postimg.cc/cCchy2Qk/42.jpg
https://i.postimg.cc/qqrwF4CC/43.jpg
https://i.postimg.cc/7P1m2Gp1/44.jpg
https://i.postimg.cc/RVMGQCBk/45.jpg
https://i.postimg.cc/J4PxTw7G/46.jpg
https://i.postimg.cc/cLCm2D6T/47.jpg
https://i.postimg.cc/cLzmSQnW/48.jpg
https://i.postimg.cc/SKzGNJ6M/49.jpg
https://i.postimg.cc/sXd4Bsm0/50.jpg
https://i.postimg.cc/W3G6gCfp/52.jpg
https://i.postimg.cc/3N3jB1PX/53.jpg
https://i.postimg.cc/8cwRnWSq/54.jpg
https://i.postimg.cc/7PNn6v2m/55.jpg
https://i.postimg.cc/SNN7YZLq/56.jpg
https://i.postimg.cc/SNTL6WV9/58.jpg
https://i.postimg.cc/W1dGXhfH/59.jpg
https://i.postimg.cc/DwRqDn9y/60.jpg
https://i.postimg.cc/VNMjP2w9/61.jpg
https://i.postimg.cc/tTjFqDRK/62.jpg
https://i.postimg.cc/76n0f7ff/63.jpg
https://i.postimg.cc/0j5mmQwZ/64.jpg
https://i.postimg.cc/qqmKGTcr/65.jpg
https://i.postimg.cc/nVTqxvyW/66.jpg
https://i.postimg.cc/ZKRp5WZ5/67.jpg
https://i.postimg.cc/dtxdkJtm/68.jpg
https://i.postimg.cc/K83TtC1X/70.jpg
https://i.postimg.cc/HLGyz3Mr/71.jpg
https://i.postimg.cc/tghVMPd2/72.jpg
https://i.postimg.cc/V6mbQ6D1/73.jpg
https://i.postimg.cc/tTknXjM6/74.jpg
https://i.postimg.cc/4y37ySDS/75.jpg
https://i.postimg.cc/Rhb3HT9V/76.jpg
https://i.postimg.cc/RCPJyvf5/77.jpg
https://i.postimg.cc/GhHT16JB/78.jpg
https://i.postimg.cc/KYy1BjXL/79.jpg
https://i.postimg.cc/ncgjVT03/80.jpg
https://i.postimg.cc/HkMJr5Nd/81.jpg
https://i.postimg.cc/yNXkPKBG/82.jpg
https://i.postimg.cc/FRr1C6HH/83.jpg
https://i.postimg.cc/G2XtWj4J/84.jpg
https://i.postimg.cc/C5d5SfDy/85.jpg
https://i.postimg.cc/sx8XXD9M/86.jpg
https://i.postimg.cc/44FnwBkX/87.jpg
https://i.postimg.cc/xTJ8ZMnM/88.jpg
https://i.postimg.cc/c4pCGCLj/89.jpg
https://i.postimg.cc/9QyMm24f/90.jpg
https://i.postimg.cc/1zPz4d6r/91.jpg
https://i.postimg.cc/bJwN92mG/92.jpg
https://i.postimg.cc/9fpQ9BY5/93.jpg
https://i.postimg.cc/XqZjT6S4/94.jpg
https://i.postimg.cc/d1NQHtf5/95.jpg
https://i.postimg.cc/C5Wh0rSD/96.jpg
https://i.postimg.cc/7PcYSh06/97.jpg
https://i.postimg.cc/rFryjTN9/98.jpg
https://i.postimg.cc/BnfSwzhf/99.jpg
https://i.postimg.cc/130mxKTn/100.jpg
https://i.postimg.cc/N0ggQHqN/101.jpg
https://i.postimg.cc/zf0qvGqq/102.jpg
https://i.postimg.cc/3RNYvQwm/103.jpg
https://i.postimg.cc/tTcydv1f/104.jpg
https://i.postimg.cc/tJVbBdWg/105.jpg
https://i.postimg.cc/Z0tS29xx/106.jpg
https://i.postimg.cc/7PCJFpN5/107.jpg
https://i.postimg.cc/bYKSp363/108.jpg
https://i.postimg.cc/02DMQDFx/109.jpg
https://i.postimg.cc/Cx0Zfdp8/110.jpg
https://i.postimg.cc/tgCY2fTC/112.jpg
https://i.postimg.cc/ht0X8gK5/113.jpg
https://i.postimg.cc/BvYtygL5/114.jpg
https://i.postimg.cc/qRNgd3yP/115.jpg
https://i.postimg.cc/bJ4rYwRs/116.jpg
https://i.postimg.cc/J0JnsCTK/117.jpg
https://i.postimg.cc/mZFhX7bM/118.jpg
https://i.postimg.cc/5NdyZj0r/119.jpg
https://i.postimg.cc/xTv8YYN1/120.jpg
https://i.postimg.cc/Dw5zJggV/121.jpg
https://i.postimg.cc/Gmb2mNvJ/122.jpg
https://i.postimg.cc/9fMQG78D/124.jpg
https://i.postimg.cc/8C0Pwz9t/125.jpg
https://i.postimg.cc/qR6BFdd0/126.jpg
https://i.postimg.cc/hvF4W3Sm/127.jpg
https://i.postimg.cc/HnQYp4xh/128.jpg
https://i.postimg.cc/y69YXBPy/130.jpg
https://i.postimg.cc/RVBCg8p5/131.jpg
https://i.postimg.cc/gkHzQD1w/132.jpg
https://i.postimg.cc/6p6WXZNM/133.jpg
https://i.postimg.cc/T3kRYPdf/134.jpg
https://i.postimg.cc/25VCqfyv/136.jpg
https://i.postimg.cc/1z2swYVd/137.jpg
https://i.postimg.cc/7hy4QGVM/138.jpg
https://i.postimg.cc/cH3ZmMQL/139.jpg
https://i.postimg.cc/8cBG8pX8/140.jpg
https://i.postimg.cc/59wbQg4P/142.jpg
https://i.postimg.cc/HsdHwMjT/143.jpg
https://i.postimg.cc/PryH2q8Y/144.jpg
https://i.postimg.cc/VkN8TcjT/145.jpg
https://i.postimg.cc/XYDb6DLv/146.jpg
https://i.postimg.cc/7LGyHMtn/148.jpg
https://i.postimg.cc/mD7fMZsc/149.jpg
https://i.postimg.cc/ZqGzCB1t/150.jpg
https://i.postimg.cc/5y1cmc4s/151.jpg
https://i.postimg.cc/BbCrYht4/152.jpg
https://i.postimg.cc/tCqQZHmT/153.jpg
https://i.postimg.cc/fWjQRbCp/154.jpg
https://i.postimg.cc/Hs6GbPft/155.jpg
https://i.postimg.cc/vZTJhtyw/156.jpg
https://i.postimg.cc/8zYq0fkJ/157.jpg
https://i.postimg.cc/zfR9ZD3d/158.jpg
https://i.postimg.cc/4dkjJC9X/160.jpg
https://i.postimg.cc/763dhB30/161.jpg
https://i.postimg.cc/GtbNykKN/162.jpg
https://i.postimg.cc/sxKL9v02/163.jpg
https://i.postimg.cc/y6T2zbYz/164.jpg
https://i.postimg.cc/RVVyCLNJ/165.jpg
https://i.postimg.cc/Z5WQpYPT/166.jpg
https://i.postimg.cc/BQYyjPKY/167.jpg
https://i.postimg.cc/vZCNzRX5/168.jpg
https://i.postimg.cc/rpWYZhY3/169.jpg
https://i.postimg.cc/W3vYBMB3/170.jpg
https://i.postimg.cc/hj1ZcXn0/171.jpg
https://i.postimg.cc/fyW2LMTQ/172.jpg
https://i.postimg.cc/wMWWRn7y/173.jpg
https://i.postimg.cc/WpSYyqXN/174.jpg
https://i.postimg.cc/fTLqQWrx/175.jpg
https://i.postimg.cc/YCLXjnk0/176.jpg
https://i.postimg.cc/Yqsnrc5T/177.jpg
https://i.postimg.cc/0NgVSY2f/178.jpg
https://i.postimg.cc/d1wnHJCZ/179.jpg
https://i.postimg.cc/Bbvp3NMq/180.jpg
https://i.postimg.cc/gJss11yS/181.jpg
https://i.postimg.cc/rpSQNDDL/182.jpg
https://i.postimg.cc/ZnDc53M6/184.jpg
https://i.postimg.cc/G3MzKwm9/185.jpg
https://i.postimg.cc/8Pj4nK74/186.jpg
https://i.postimg.cc/gkQs9VRW/187.jpg
https://i.postimg.cc/jSfXRDQJ/188.jpg
https://i.postimg.cc/LsB3ZGW9/190.jpg
https://i.postimg.cc/3R8CjnMg/191.jpg
https://i.postimg.cc/Jnp3pZmS/192.jpg
https://i.postimg.cc/BbtTkbnb/193.jpg
https://i.postimg.cc/GtNFCR4Q/194.jpg
https://i.postimg.cc/mZ6NMYmH/196.jpg
https://i.postimg.cc/CLBC4R26/197.jpg
https://i.postimg.cc/65krb9J6/198.jpg
https://i.postimg.cc/kgWxkkqQ/199.jpg
https://i.postimg.cc/CKYjYmxW/200.jpg
https://i.postimg.cc/wBVDBLt3/203.jpg
https://i.postimg.cc/4dxVHytP/204.jpg
https://i.postimg.cc/FRCcyvV4/205.jpg
https://i.postimg.cc/rsd4gHft/206.jpg
https://i.postimg.cc/sf871V2P/208.jpg
https://i.postimg.cc/prgFSBSc/209.jpg
https://i.postimg.cc/RZxtQXKN/210.jpg
https://i.postimg.cc/kgNbjKvw/212.jpg
https://i.postimg.cc/q7kCWqmr/213.jpg
https://i.postimg.cc/252BYYJZ/214.jpg
https://i.postimg.cc/sXxGD8d0/215.jpg
https://i.postimg.cc/D0bW1Xzr/216.jpg
https://i.postimg.cc/QVGFmdBR/217.jpg
https://i.postimg.cc/G2f8BQb3/218.jpg
https://i.postimg.cc/J79xv3jW/220.jpg
https://i.postimg.cc/RC3Ggp6R/221.jpg
https://i.postimg.cc/xTM52kPN/222.jpg
https://i.postimg.cc/x1QRT0sx/223.jpg
https://i.postimg.cc/pLBBmg42/224.jpg
https://i.postimg.cc/VNLWnKPX/225.jpg
https://i.postimg.cc/xdxyRL9h/226.jpg
https://i.postimg.cc/fLV7gkLL/227.jpg
https://i.postimg.cc/pr8fR7KM/228.jpg
https://i.postimg.cc/zDRSCL62/229.jpg
https://i.postimg.cc/GhwPqL1L/230.jpg
https://i.postimg.cc/wj9XYwvn/232.jpg
https://i.postimg.cc/4xwzfpHy/233.jpg
https://i.postimg.cc/xdCLcqLR/234.jpg
https://i.postimg.cc/9fnZTVpj/235.jpg
https://i.postimg.cc/V60MWTG0/236.jpg
https://i.postimg.cc/Znrd1NhT/238.jpg
https://i.postimg.cc/brXnCTWC/239.jpg
https://i.postimg.cc/y69cJM3w/240.jpg
https://i.postimg.cc/SNh8cgWj/241.jpg
https://i.postimg.cc/xT3m5LR5/242.jpg
https://i.postimg.cc/MpZQFX3S/243.jpg
https://i.postimg.cc/52PCd1DF/244.jpg
https://i.postimg.cc/FK7Jh8QC/245.jpg
https://i.postimg.cc/wBZRM2qq/246.jpg
https://i.postimg.cc/j2rWQjnB/247.jpg
https://i.postimg.cc/50zYCzyw/248.jpg
https://i.postimg.cc/D0dSCKq0/249.jpg
https://i.postimg.cc/h49Q4VHn/250.jpg
https://i.postimg.cc/m2BzPtsH/251.jpg
https://i.postimg.cc/QxmB1h8n/252.jpg
https://i.postimg.cc/x1dXPhqj/253.jpg
https://i.postimg.cc/0yHbXnJY/254.jpg
https://i.postimg.cc/YSGj5F1J/256.jpg
https://i.postimg.cc/tgK7pgk7/257.jpg
https://i.postimg.cc/V6Xv6cZg/258.jpg
https://i.postimg.cc/Vv160H38/259.jpg
https://i.postimg.cc/4y536Qgh/260.jpg
https://i.postimg.cc/zDS3Y8gX/261.jpg
https://i.postimg.cc/dts3qp2R/262.jpg
https://i.postimg.cc/DyxZm669/263.jpg
https://i.postimg.cc/XYXv55Dp/264.jpg
https://i.postimg.cc/P5c5QqBK/265.jpg
https://i.postimg.cc/KYMvq2bb/266.jpg
https://i.postimg.cc/KzhcCHcM/268.jpg
https://i.postimg.cc/85dkGmsn/269.jpg
https://i.postimg.cc/yxV183Z6/270.jpg
https://i.postimg.cc/HnBpcWww/271.jpg
https://i.postimg.cc/8kHkn427/272.jpg
https://i.postimg.cc/5N29cvJn/274.jpg
https://i.postimg.cc/jd3xR5dK/275.jpg
https://i.postimg.cc/wjt6Mp7N/276.jpg
https://i.postimg.cc/rwvqtPrP/277.jpg
https://i.postimg.cc/g08myHyk/278.jpg
https://i.postimg.cc/hjng2QM8/280.jpg
https://i.postimg.cc/d19FpQSb/281.jpg
https://i.postimg.cc/prXvHNwp/282.jpg
https://i.postimg.cc/zvtrDtNp/283.jpg
https://i.postimg.cc/qBj0GRKn/284.jpg
https://i.postimg.cc/02jvXsG4/286.jpg
https://i.postimg.cc/dtfYzx4V/287.jpg
https://i.postimg.cc/QdW3sJyk/288.jpg
https://i.postimg.cc/HLDCL7GG/289.jpg
https://i.postimg.cc/Zq8zvKZW/290.jpg
https://i.postimg.cc/SsmF6FND/291.jpg
https://i.postimg.cc/SsV0VTnq/292.jpg
https://i.postimg.cc/mkrvnY99/293.jpg
https://i.postimg.cc/90N6HDPn/294.jpg
https://i.postimg.cc/kM13bHrv/295.jpg
https://i.postimg.cc/dtpbWTV7/296.jpg
https://i.postimg.cc/jSfGBdDM/297.jpg
https://i.postimg.cc/rpLvTXWM/298.jpg
https://i.postimg.cc/mrNK2XNM/299.jpg
https://i.postimg.cc/pTW49fqS/300.jpg
https://i.postimg.cc/DZxD1SNw/301.jpg
https://i.postimg.cc/x874FWnr/302.jpg
https://i.postimg.cc/7PQd6T7B/303.jpg
https://i.postimg.cc/kX0HN3TK/304.jpg
https://i.postimg.cc/3J46DJF3/305.jpg
https://i.postimg.cc/CKN6VZSs/306.jpg
https://i.postimg.cc/pTLcV2db/307.jpg
https://i.postimg.cc/XqZ2FQFs/308.jpg
https://i.postimg.cc/nzSRC6ss/309.jpg
https://i.postimg.cc/NGVCYvqS/310.jpg
https://i.postimg.cc/zv9xkKF8/311.jpg
https://i.postimg.cc/YqWnCDt9/312.jpg
https://i.postimg.cc/pLM0hQdB/313.jpg
https://i.postimg.cc/3wKn9Km4/314.jpg
https://i.postimg.cc/W4XSHQw9/315.jpg
https://i.postimg.cc/rwGfSd02/316.jpg
https://i.postimg.cc/pTrkbq0P/317.jpg
https://i.postimg.cc/J0BqttVg/318.jpg
https://i.postimg.cc/xCZ50M7M/319.jpg
https://i.postimg.cc/JtVQXmRh/320.jpg
https://i.postimg.cc/pVhbKZ2N/321.jpg
https://i.postimg.cc/9X63b7MD/322.jpg
https://i.postimg.cc/T3xzMvnG/323.jpg
https://i.postimg.cc/X7dRzYGQ/324.jpg
https://i.postimg.cc/3xZP3fZG/325.jpg
https://i.postimg.cc/nLcNrKdP/326.jpg
https://i.postimg.cc/Zq72d92K/327.jpg
https://i.postimg.cc/rmDbCV2G/328.jpg
https://i.postimg.cc/nzNW3yny/329.jpg
https://i.postimg.cc/5yvRTs06/330.jpg
https://i.postimg.cc/DfbHSwgn/331.jpg
https://i.postimg.cc/qMVYyHbn/332.jpg
https://i.postimg.cc/9QcngtjQ/334.jpg
https://i.postimg.cc/vZXSJgQL/335.jpg
https://i.postimg.cc/DzZYnv0V/336.jpg
https://i.postimg.cc/Pxv3vS12/337.jpg
https://i.postimg.cc/HnGSwb2H/338.jpg
https://i.postimg.cc/j2zMZCgf/340.jpg
https://i.postimg.cc/h4xZS3DG/341.jpg
https://i.postimg.cc/HsgZj4n9/342.jpg
https://i.postimg.cc/dtjWCkTP/343.jpg
https://i.postimg.cc/YC2dzr14/344.jpg
https://i.postimg.cc/Qd6062bf/346.jpg
https://i.postimg.cc/QMHSvfYh/347.jpg
https://i.postimg.cc/9fK12ysT/348.jpg
https://i.postimg.cc/k4SsgBdH/349.jpg
https://i.postimg.cc/T1X9Lfd3/350.jpg
https://i.postimg.cc/T1X9Lfd3/350.jpg
https://i.postimg.cc/T1X9Lfd3/350.jpg
https://i.postimg.cc/T1X9Lfd3/350.jpg
        
        `;
        return data.split("\n")[index];
    }

    const frameCount = 590;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.8,
            pin: true,
            trigger: "#home",
        },
        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

    // gsap.to("#home canvas", {
    //     scale: 0.8,
    //     scrollTrigger: {
    //         scrub: .1,
    //         trigger: "#home",
    //         start: "bottom 100%",
    //         markers:true,
    //     },
    // })
    ScrollTrigger.create({
        trigger: "#home",
        pin: true,
        start: "bottom 100%",
    })

}

dom()



// slider ki javascript
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-review');
    const slider = document.querySelector('.slider-review');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    window.addEventListener('resize', updateSlider);
    updateSlider(); // Initial setup
});
