var HEIGHT = window.screen.height-80;
var pageData = {
    imgList:[
        [{
            "styleObject":{
                "height":HEIGHT+'px',
                "width":'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Home-Slogan.JPG')",
                "background-size":"100% 100%",
                "min-width": "80%",
                "-ms-interpolation-mode": "bicubic"
            },
            "middle":{
                "isVideo":'video',
                "picVideo": 'http://maddog-static.oss-cn-qingdao.aliyuncs.com/videoImg.jpeg',
                "srcVideo":"../video/test1.mp4"
            }
        },{
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Home-activity.JPG')",
                "background-size":"100% 100%",
                "min-width": "80%",
                "-ms-interpolation-mode": "bicubic"
            },
            "middle":{
              "isPpt":'ppt',
              "srcPpt":"http://slides.com/guanlingjuan/fds/fullscreen"
            }
        }],
        [{
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Services-Embedded-Development.JPG')",
                "background-size":"100% 100%",
                "-ms-interpolation-mode": "bicubic"
            },
            "middle":{
              "isFont":'font',
              "characte":"我们提供嵌入式软硬件设计，快速原型设计，工业控制系统应用设计等服务，在每一步设计中都带着新的想法去超越。",
              "characteEnglish":"We offer rapid proto-typing and proto-type testing for all applications and Software development for embedded industrial control systems and applications With long experience in designing we  assist our customers in product design right from the start, bringing fresh ideas to every step in the design process and beyond, all the way towards manufacturing.",
              "middle":{
                  "width":"500px",
                  "text-align":'left',
                  "margin": 'auto',
                  'color':'#ffffff'
              }
            }
        },{
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Services-Product-Design.jpg')",
                "background-size":"100% 100%",
                "-ms-interpolation-mode": "bicubic"
            },
            "left":{
              "characte":"嵌入式开发是MadDog工作室的优势。我们致力于技术，客户服务，打造最适合您需求的产品。",
              "characteEnglish":"Embedded development is a major foothold of Mad Dog Studios. We are committed to technology, customer service, to create a product that best suits your needs.",
              "locate":{
                "width": "400px",
                "top":"300px",
                "left":"20px"
              }
            }
        },{
            "styleObject":{
                "height":HEIGHT+'px',
                "width":'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Services-RF-Design.jpg')",
                "background-size":"100% 100%",
                "-ms-interpolation-mode": "bicubic"
            },
            "right": {
              "characteEnglish":"RF design is one of our strengths when it comes to making durable and reliable test environment for laboratories and manufacturing centers. We assist customers following their requirements while developing ways to achieving their goals in the design.",
              "characte":"RF设计是我们的优势之一，我们在开发设计过程中按照他们的需求来完成产品的设计。",
              "locate":{
                "width": "400px",
                "top":"300px",
                "right":"60px"
              }
            }
        }],
        [{
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Product-Blood-glucose.jpg')",
                "background-size":"100% 100%",
                "-ms-interpolation-mode": "bicubic"
            },
            "right":{
              "characte":"暖通空调系统可以控制在你的地方，空气的温度和湿度，并保持较高的空气质量；方便你和维修工人迅速了解情况并及时纠正状况。",
              "characteEnglish":"HVAC system can control the air temperature and humidity in your place and maintain high air quality. It is convenient to you and maintenance workers to quickly understand the status of HVAC and timely correction and warning.",
              "locate":{
                "width": "400px",
                "top":"300px",
                "right":"70px"
              }
            }
        },{
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Product-HVAC.JPG')",
                "background-size":"100% 100%",
                "-ms-interpolation-mode": "bicubic"
            },
            "left":{
              "characte":"我们设计的血糖仪可以直接上传测得的血糖含量到Web服务器，可以让医生及时了解糖尿病患者的情况，并给出相关的治疗建议。",
              "characteEnglish":"We are involved in the blood glucose meter can directly upload the measured blood glucose content to the web server, can let the doctor in time to understand the situation of diabetic patients and give relevant treatment recommendations.",
              "locate":{
                "width": "420px",
                "top":"200px",
                "left":"50%",
                "margin-left":"-210px"
              }
            }
        },
        {
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Product-More-to-Be-Continued.jpg')",
                "background-size":"100% 100%",
                "-ms-interpolation-mode": "bicubic"
            }
        }],
        [{
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/Support.JPG')",
                "background-size":"100% 100%",
                "-ms-interpolation-mode": "bicubic"
            },
            "middle":{
              "isFont":'font',
              "characte":"我们有经验丰富的售后服务人员，确保您可以在第一时间获得支持，我们有能力提供现场支持，返厂维修和在线服务，确保您获得高质量服务。",
              "middle":{
                  "width":"500px",
                  "text-align":'left',
                  "margin-left": "400px",
                  'color':'#ffffff'
              },
              "characteEnglish":"Our aftermarket services employs experienced service and parts personnel to ensure you get the correct part and the job is done right the first time. We can afford On-site support, Depot repair and online services to ensure you can get a Quality Experience."
            },
            "left":{
              "characte":"地址:中国成都市郫县天润路777号学府海棠1-2-1802 电话:028-87841139",
              "characteEnglish":"No.1-2-1802, Xuefuhaitang, Tianrun RD No.777, Pixian, Chengdu   Tel:028-87841139",
              "locate":{
                "width": "335px",
                "bottom":"100px",
                "right":"0"
              }
            }
        }],
        [{
            "styleObject":{
                height:HEIGHT+'px',
                width:'100%',
                "background-image": "url('http://maddog-static.oss-cn-qingdao.aliyuncs.com/About.jpg')",
                "background-size":"100% 100%",
                "min-width": "1000px",
                "-ms-interpolation-mode": "bicubic"
            },
            "left":{
                "characte":"MadDog是一家致力于嵌入式开发团队的工作室。过硬的实力，耐心地倾听，实时通信和良好的管理是我们比其他同业更好的原因。",
                "characteEnglish":"Mad Dog is a studio dedicated to embedded development team. Excellent strength, patiently listening, real-time communication and good management are the reasons that we are better than others in the industry.",
                "locate":{
                    "width":"500px",
                    "height":"200px",
                    "top":"50%",
                    "left":"50%",
                    "margin-left":"-250px",
                    "margin-bottom":"-100px"
                }
            }
        }]
    ]
}
module.exports = pageData;
