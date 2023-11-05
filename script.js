document.addEventListener("DOMContentLoaded", function () {
    const chat = document.getElementById("chat");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    let userPetType = ""; // Store the user's pet type
    let userPetfoodcato ="";//Store user's cato
    let userPetExercato="";
    let userPetGroomcato="";

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        if (userMessage.trim() === "") return;

        addMessage(userMessage, "user");
        processUserMessage(userMessage);

        userInput.value = "";
    });

    function addMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = message;
        chat.appendChild(messageDiv);
        chat.scrollTop = chat.scrollHeight;
    }

    function processUserMessage(userMessage) {
        const userMessageLower = userMessage.toLowerCase();

        if (userPetType === "") {
            // If user hasn't specified their pet type yet, ask for it
            if (userMessageLower.includes("dog")) {
                userPetType = "dog";
                addMessage("Great! You have a dog. What guidance are you seeking for your dog?", "chatbot");

            } else if (userMessageLower.includes("cat")) {
                userPetType = "cat";
                addMessage("Great! You have a cat. What guidance are you seeking for your cat?", "chatbot");
            } else {
                addMessage("I'm sorry, I couldn't determine your pet type. Please tell me if you have a dog or a cat.", "chatbot");
            }
        } 
        else {
            // If user has specified their pet type, provide guidance based on the query
            if (userPetType === "dog") {
                if (userMessageLower.includes("food")) {
                    userPetfoodcato = "food";
                    addMessage("For your dog, it's important to choose high-quality dog food that meets their specific dietary needs. You can consider options like dry kibble, wet food, or a combination based on your dog's age, size, and activity level. Do you have any specific dietary concerns for your dog? Here is the list of dietary categories: Nutrition, Protein Quality, Portion Control", "chatbot");
                    } else if (userPetfoodcato === "food" && userMessageLower.includes("nutrition")) {
                        addMessage("Ensure your dog's diet includes a proper balance of proteins, carbohydrates, fats, vitamins, and minerals to meet their nutritional needs.", "chatbot");
                    } else if (userPetfoodcato === "food" && userMessageLower.includes("protein quality")) {
                        addMessage("Provide high-quality protein sources like meat, fish, and eggs to support muscle development and overall health.", "chatbot");
                    } else if (userPetfoodcato === "food" && userMessageLower.includes("portion control")) {
                        addMessage("Avoid overfeeding to prevent obesity; feed the right portion size based on your dog's size, age, and activity level.", "chatbot");
                }else if(userMessageLower.includes("exercise")){
                    userPetExercato = "exercise";
                    addMessage("Engaging in physical activity and play sessions to keep your pet active, healthy, and mentally stimulated. This may involve walking, playing fetch, or engaging in other activities that your pet enjoys. Do you want guidence for a specific dog activities? Here is the list of basic exercises for a dog: Walking, Fetching, Agility training, Swimming", "chatbot");
                    } else if (userPetExercato === "exercise" && userMessageLower.includes("walking")) {
                        addMessage("Walking is crucial for dogs as it provides essential exercise, mental stimulation, and social interaction. It helps maintain their physical health, relieves boredom, and fosters a stronger bond with their owners. Regular walks contribute to a happy and well-balanced canine lifestyle. Please treat your dogs with the joy of walking for atleast one time per day ", "chatbot");
                    } else if (userPetExercato === "exercise" && userMessageLower.includes("fetching")) {
                        addMessage("To encourage your dog to fetch, follow these tips: Select a toy that your dog finds enticing, whether it's a tennis ball, frisbee, or a favorite stuffed toy.If your dog is new to fetching, begin with short throws and gradually increase the distance as they become more confident.Teach your dog commands like fetch it and drop it to establish clear communication.Remember, fetching is not just a game; it's a valuable activity that keeps your dog physically active, mentally stimulated, and emotionally fulfilled.", "chatbot");
                    } else if (userPetExercato === "exercise" && userMessageLower.includes("agility training")) {
                        addMessage("let's discuss how to introduce your dog to agility training:Begin with simple obstacles like tunnels or low jumps. Use treats and praise to reward your dog's successful attempts.Always employ positive reinforcement to encourage your dog. Reward their efforts with treats, toys, and affection.As your dog becomes more comfortable, gradually introduce more complex obstacles and challenges.If you're new to agility training, consider seeking assistance from a professional trainer who can guide you and your dog.", "chatbot");
                    } else if (userPetExercato === "exercise" && userMessageLower.includes("swimming")) {
                        addMessage("it's a fantastic way to ensure your dog's physical fitness, mental stimulation, and an overall sense of joy. It's all about embracing their love for water while nurturing their well-being.Here's why swimming is important for dogs, It supports Low-Impact Exercise,Full-Body Workout,Weight Management and Mental Stimulation", "chatbot");
                }else if(userMessageLower.includes("grooming")){
                    userPetGroomcato = "grooming";
                    addMessage("Grooming plays a pivotal role in the overall well-being of your cherished dog, and as a devoted pet care center, we wholeheartedly recognize its significance. Grooming offers a myriad of advantages that are essential for your furry friend's health and happiness.Do you want guidence for a specific dog grooming? Here is the list of basic grooming tips for a dog: Maintaining Hygiene, Preventing Matting and Tangles, Temperature Regulation", "chatbot");
                    } else if (userPetGroomcato === "grooming" && userMessageLower.includes("maintaining hygiene")) {
                        addMessage("Maintaining hygiene is a cornerstone of responsible pet care, and at our dedicated pet care center, we fully understand its critical importance for your beloved dog. Proper hygiene contributes significantly to your dog's overall health, comfort, and well-being.", "chatbot");
                    } else if(userPetGroomcato === "grooming" && userMessageLower.includes("preventing matting and tangles")) {
                        addMessage("Preventing matting and tangles in your dog's coat and incorporating activities like fetch into their routine are key elements of ensuring a content, healthy life for your furry companion. We're here to support you in all aspects of responsible pet care and to help your dog thrive.","chatbot");
                    } else if(userPetGroomcato === "grooming" && userMessageLower.includes("temperature regulation")){
                        addMessage("Temperature regulation is a fundamental aspect of your dog's well-being, and we, as your trusted pet care center, fully understand its vital role in ensuring your beloved canine's comfort and health. Proper temperature regulation and engaging in activities like fetch are vital components of ensuring a content, healthy life for your furry companion. We're here to support you in all aspects of responsible pet care and to help your dog thrive.","chatbot");
                    }
                }            
            }
        }
    const initialGreeting = "Hello! I'm your friendly Pet Care Chatbot. Do you have a pet? If so, please tell me about your pet";
    addMessage(initialGreeting, "chatbot");
});
