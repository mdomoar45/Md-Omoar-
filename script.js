function speak() {
  const message = new SpeechSynthesisUtterance("হ্যালো! আমি নূরী। আমি তোমার সহকারী এবং বন্ধু।");
  message.lang = "bn-BD";
  speechSynthesis.speak(message);
}
