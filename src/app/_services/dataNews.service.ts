 import { News } from '../_models/news';

export class DataNewsService {
    createDb() {
        const news: News[] = [
            { id: 1,
              title: 'Transit Synagogue Opens at Moscow’s International Airport',
              body: 'A new Synagogue opened at Moscow’s Domodedovo airport with the help of FJC Russia this Thursday. Up until now, Domodedovo, one of Russia’s largest airports, only had a multi-purpose ‘mediation’  space. ',
              date: '2017/01/01',
              url:'../../assets/images/picture1.jpg'
            },
            { id: 2,
              title: 'Uzhgorod Jewish Community Confronted by Antisemitism',
              body: 'The Jewish community of Uzhgorod in West Ukraine became increasingly worried of anti-Semitic attacks this week, with anti-Semitic graffiti proclaiming, “Death to the Jews” and calling for “revenge” appearing on the wall of city’s Jewish charity center on Saturday night and on the fence of the synagogue Sunday night.',
              date: '2017/02/12',
              url: '../../assets/images/picture2.jpg'
            },
            { id: 3,
              title: '7,000 Visitors Welcomed at Petersburg Synagogue’s Open House',
              body: 'This Sunday the Grand Choral Synagogue in Petersburg, Russia opened its doors for the annual Open House it hosts every fall for the last nine years. Last year 6,500 visitors came to learn more about the synagogue, and this year the numbers were even higher.',
              date: '2016/12/07',
              url: '../../assets/images/picture3.jpg'
            },
            { id: 4,
              title: 'Moscow Jewish College Opens Doors to New Students',
              body: 'Machon Chomesh in Moscow, FJC’s Jewish Institute for women, hosted an open house seminar last week, welcoming potential students from all over Russia, from Birobidjan to Yekaterinburg. The Institute holds a unique place among the country’s higher education institutions offering high-quality professional education together with a homey Jewish atmosphere of spiritual growth and personal attention.',
              date: '2017/06/05',
              url: '../../assets/images/picture4.jpg'
            },
            { id: 5,
              title: 'FJC’s Jewish Museum and Tolerance Center Celebrates 5th Anniversary',
              body: 'FJC’s Jewish Museum and Tolerance Center in Moscow celebrated its 5th birthday this week. Opened in 2012 with the initiative of FJC of Russia’s leadership, today the museum is an important part of cultural life in the Russian capital. During its five years of operation, the museum hosted close to a million visitors, about 9,000 guided tours were conducted, 36 temporary exhibitions premiered, while the museum’s main exhibit halls were also constantly updated.',
              date: '2015/01/10',
              url: '../../assets/images/picture5.jpg'
            },
            { id: 6,
              title: 'YAHAD Leadership School Begins New Season',
              body: 'YAHAD’s 5th School of Leaders seminar opened this Sunday, gathering representatives from 50 cities across the FSU, including Belarus, Georgia, Azerbaijan and the Baltic states. Almost 100 young Jewish adults, aged 18 to 30, came together in Moscow to learn informal education skills from the leading regional professionals.',
              date: '2017/03/04',
              url: '../../assets/images/picture6.jpg'
            },
            { id: 7,
              title: 'Beit Chana Institute Welcomes New Students',
              body: 'A new studies semester is underway at Ukraine’s Jewish Pedagogical Institute “Beit Chana.” Just last week the group of distance-learning students joined the rest of their peers in the fall semester. The Beit Chana Institute prepares some of the top educational professionals in Ukraine, who go on to teach in Jewish schools and kindergartens.',
              date: '2017/08/12',
              url: '../../assets/images/picture7.jpg'
            },
            { id: 8,
              title: 'Darkeinu Mentors Visit Russian Schools',
              body: 'Last week, Darkeinu mentors from Israel visited four FJC ‘Or Avner’ Jewish schools in Russian cities of Omsk, Moscow, Ufa and Yekaterinburg to see how the studies progress in the new academic year. They sat in on lessons in different classes and also met with the school’s pedagogical staff and discussed on-going initiatives.',
              date: '2014/10/06',
              url: '../../assets/images/picture8.jpg'
            },
            { id: 9,
              title: 'Head of Russian Orthodox Church Visits Jewish Museum',
              body: 'Patriarch Kirill of Russian Orthodox church visited FJC’s Jewish Museum of Tolerance in Moscow last week, as part of the Russian Interfaith Assembly meeting that also took place in the museum. ',
              date: '2017/01/12',
              url: '../../assets/images/picture9.jpg'
            },
            { id: 10,
              title: 'Fall Holidays Draw In Thousands Across the FSU',
              body: 'Thousands of Jews of all walks of life, young and old, men and women, single, married and entire families turned up for the final celebrations of the fall Jewish holidays of Sukkot and Simhat Torah across hundreds of FSU communities this year.',
              date: '2012/11/02',
              url: '../../assets/images/picture10.jpg'
            }
        ];
        return { news };
    }
}