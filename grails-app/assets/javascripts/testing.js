$(function() { 
                var socket = new SockJS("http://localhost:8181/stomp");
                var client = Stomp.over(socket);

                client.connect({}, function() {
                    client.subscribe("/topic/hello", function(message) {
                        console.log(message.body)
                        $("#helloDiv").append(message.body);
                    });
                });

                $("#helloButton").click(function() {
                    client.send("/app/hello", {}, JSON.stringify("world"));
                });

                $("#testwebsocket").on('click',function (){
                    $.ajax({
                        url:"/example/websocketTest",
                        success:function(data){
                            console.log("Done")
                        },
                        error:function(jqXHR,textStatus,errorThrown){
                            
                        }
                    })
                })

                /*$("#serviceHelloButton").click(function() {
                    client.subscribe("/topic/serviceHello", function(message) {
                        console.log(message.body)
                        $("#helloDiv").append(message.body);
                    });

                    client.send("/topic/serviceHello", {}, JSON.stringify("serviceWorld"))
                });*/
            });