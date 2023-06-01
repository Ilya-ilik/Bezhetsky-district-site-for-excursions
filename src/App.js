// import logo from './logo.svg';
import "./App.css";
import styles from "./App.module.css"; // импортируем модуль css

// const Header = () => {
//   return (
//     <>

//     </>
//   );
// };

function App() {
  return (
    <div className="App">
      <div class={styles.intro}>
        <div class={styles.header}>
          <div class={styles.left}>
            <div class={styles.left_menu}></div>
            <div class={styles.logo}></div>
          </div>

          <div class={styles.menu}>
            <ul>
              <li class={styles.menu__item}>
                <a href="#" class={styles.menu__link}>
                  Аудиогиды
                </a>
              </li>
              <li class={styles.menu__item}>
                <a href="#" class={styles.menu__link}>
                  Создайте аудиогид
                </a>
              </li>
              <li class={styles.menu__item}>
                <a href="#" class={styles.menu__link}>
                  О нас
                </a>
              </li>
              <li class={styles.menu__item}>
                <a href="#" class={styles.menu__link}>
                  API
                </a>
              </li>
              <li class={styles.menu__item}>
                <a href="#" class={styles.menu__link}>
                  Вход
                </a>
              </li>
              <li class={styles.menu__item}>
                <a href="#" class={styles.menu__link}>
                  спецпредложения
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class={styles.intro__text}>Надежное туристическое агентство</div>
        <div class={styles.intro__header}>
          Исследуйте новые горизонты вместе с нами
        </div>
        <div class={styles.intro__button}>
          <p>Подобрать тур</p>
        </div>
      </div>
      <div class={styles.next__1}>
        <div class={styles.next__obshiy}>
          <div class={styles.next__1__block__1}>
            <div class={styles.krug}></div>
            <div>Широкий выбор туров</div>
            <div>
              Предлагаем туры практически в любой уголок мира. Мечтаете посетить
              пляжи Шри-Ланки или горячую Доминикану? Не проблема!
            </div>
          </div>
          <div class={styles.next__1__block__2}>
            <div class={styles.krug}></div>
            <div>Качественный сервис</div>
            <div>
              Работаем только с надежными партнерами, чтобы предлагать и
              организовывать лучшие туры с гарантией для наших любимых клиентов.
            </div>
          </div>
          <div class={styles.next__1__block__3}>
            <div class={styles.krug}></div>
            <div>Приятные цены</div>
            <div>
              Лучшие предложения и цены на сайте. Вы можете подобрать тур
              согласно вашим пожеланиям, а можете приобрести горящую путевку по
              очень выгодной цене.
            </div>
          </div>
          <div class={styles.next__1__block__4}>
            <div class={styles.krug}></div>
            <div>Круглосуточная поддержка</div>
            <div>
              Заботимся о клиентах 24/7. Если у вас возникли вопросы или
              сложности в путешествии, мы всегда рядом. Каждый клиент важен для
              нас!
            </div>
          </div>
        </div>
      </div>
      <div class={styles.next__2}>
        <div class={styles.block__1}>
          <div class={styles.block__1_1}>
            <p>Мы продумали все для вашего увлекательного отдыха</p>
            <p>Незабываемые приключения</p>
            <p>
              Каждый из нас мечтает о том, чтобы посвятить свою жизнь <br />
              путешествиям. Современные люди предпочитают вкладывать деньги{" "}
              <br />
              в собственное развитие, приобретение опыта и воспоминаний, <br />а
              не красивых безделушек. Именно поездка в страну, обладающую <br />
              другой культурой, менталитетом и виденьем жизни, может изменить
              <br />
              Вас в лучшую сторону. Отдых же всегда пойдет на пользу. <br />
              С географией мест для посещений позвольте Вас ознакомить <br />
              профессиональным менеджерам по туризму!
            </p>
            <div class={styles.intro__button}>
              <p>Подобрать тур</p>
            </div>
          </div>
          <div class={styles.block__1_2}></div>
        </div>
      </div>
      <div class={styles.footer}>
        <div class={styles.text__footer}></div>
      </div>
    </div>
  );
}

export default App;
