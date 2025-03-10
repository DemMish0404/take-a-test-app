const allQuestions = document.getElementsByClassName('quiz-block')
const container = document.getElementsByClassName('wrapper')[0]
let counterOfTheRightAnswers = 0;

container.addEventListener('click', (event)=>{

  


   //узнаем с каким вопросом на данный момент взаимодействуют 
   if (event.target.closest('.quiz-block')){
      const currentQuestionBlock = event.target.closest('.quiz-block');

      if(event.target.closest('.option-from-quiz') ){
         currentQuestionBlock.querySelector('.quiz-block__options-block').classList.add('disabled');
         
         const allButtons = currentQuestionBlock.querySelectorAll('.options-block__option')
         console.log(allButtons)
         for( let i = 0 ; i < allButtons.length ;  i++) {
            if(allButtons[i].classList.contains('right-one')){
               allButtons[i].style.backgroundColor = '#30c94c'
            } else{
               allButtons[i].style.backgroundColor = '#c9304f'
            }
         }



         if(event.target.closest('.option-from-quiz') && event.target.closest('.option-from-quiz').classList.contains('right-one')){
            counterOfTheRightAnswers = counterOfTheRightAnswers + 1
            console.log('правильно!')
         }

      }


      //узнаем индекс активного вопроса
      let currentIndexOfTheQuestion = null;
      let lastIndexOfTheQuestion = allQuestions.length - 1 
      for(let i = 0 ; i < allQuestions.length ; i++){
         if(allQuestions[i] == currentQuestionBlock){
            currentIndexOfTheQuestion = i
         }

      }
      
      
      // осуществляем переход на следующий вопрос путем убирания класса актив у действующего вопроса и добавления следующему
      if(event.target.closest('.button') && event.target.innerText.toLowerCase() === 'next one' || event.target.innerText.toLowerCase() === 'start'){
         
         //исключаем переход на следующий вопрос при последнем вопросе
         if(currentIndexOfTheQuestion === lastIndexOfTheQuestion  ){
            alert('это последний вопрос')
            return
         }
         allQuestions[currentIndexOfTheQuestion].classList.remove('active')
         allQuestions[currentIndexOfTheQuestion + 1].classList.add('active')
      }

      //начать заново
      if(event.target.closest('.button') && event.target.innerText.toLowerCase() === 'start over'){
         // allQuestions[currentIndexOfTheQuestion].classList.remove('active')
         // allQuestions[0].classList.add('active')


         location.reload();  // просто обновляем страницу
      }


      //узнать результаты
      if(event.target.closest('.button') && event.target.innerText.toLowerCase() === 'finish'){
         alert(`ты ответил правильно ${counterOfTheRightAnswers}/ ${allQuestions.length - 1}`)
      }
      

   }

   



})

