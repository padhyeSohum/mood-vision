

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBelNC78JHbK2szV_V6ErVusxd0SbeSrE4');
let Name = 'Nirek'
let Mindset = ' I am a 14 year old boy living in cananda who wants to learn more about computer science'
let LearningStyle = 'Visual'
let Language = 'English'
let Conditions = 'ADHD'
async function topics(Name, Mindset , LearningStyle , Language , Conditions) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});


    const prompt = `I want you to generate a list of topics to study for a boy named ${Name} his self described mindset is ${Mindset}  his language is ${Language} and he has the Conditions ${Conditions} return a list of 50 subjects he may be interested in a csv format`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}



async function populate(Topic ,  Mindset , LearningStyle ) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});


    const prompt = `My Topic is ${Topic} give me a video , a high level overview in a csv format`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

async function VideoQuiz(link) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});


    const prompt = `My Topic is ${Topic} give me a video`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}


populate("Machine Learning in Python" , Mindset, LearningStyle)






