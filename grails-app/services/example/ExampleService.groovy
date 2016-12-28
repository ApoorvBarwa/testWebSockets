package example

import org.springframework.messaging.simp.SimpMessagingTemplate


class ExampleService {

    SimpMessagingTemplate brokerMessagingTemplate

    void hello() {
    	println "Called"
        brokerMessagingTemplate.convertAndSend "/topic/hello", "hello from service!"
    }

}