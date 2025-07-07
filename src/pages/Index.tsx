import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-primary">
                ООО "Август"
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="hidden md:block">Заказать консультацию</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
                  Создаем искусственные
                  <span className="text-primary block">пруды мечты</span>
                </h2>
                <p className="text-xl text-gray-600 font-inter max-w-lg">
                  Премиальные строительные и ландшафтные работы с 15-летним
                  опытом. Специализируемся на создании элегантных водных
                  объектов.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Icon name="Eye" className="mr-2" size={20} />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/img/d987847f-68b7-457e-ac90-5e1ecb690280.jpg"
                  alt="Элегантный искусственный пруд"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Star"
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                  <span className="font-semibold text-gray-900">4.9</span>
                  <span className="text-sm text-gray-600">из 127 отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр строительных и ландшафтных работ для создания
              идеального пространства
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Hammer" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl font-playfair">
                  Строительство
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Профессиональные строительные работы любой сложности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-secondary mr-2"
                      size={16}
                    />
                    Фундаменты и основания
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-secondary mr-2"
                      size={16}
                    />
                    Стены и перекрытия
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-secondary mr-2"
                      size={16}
                    />
                    Кровельные работы
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trees" className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-2xl font-playfair">
                  Ландшафтный дизайн
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Создание уникальных ландшафтных решений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-secondary mr-2"
                      size={16}
                    />
                    Проектирование садов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-secondary mr-2"
                      size={16}
                    />
                    Система полива
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-secondary mr-2"
                      size={16}
                    />
                    Освещение территории
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary/5 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Waves" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Искусственные пруды
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Наша главная специализация - создание водных объектов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-primary mr-2"
                      size={16}
                    />
                    Декоративные пруды
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-primary mr-2"
                      size={16}
                    />
                    Системы фильтрации
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-primary mr-2"
                      size={16}
                    />
                    Водопады и каскады
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Галерея работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Посмотрите на наши реализованные проекты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="/img/d987847f-68b7-457e-ac90-5e1ecb690280.jpg"
                alt="Декоративный пруд"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair font-semibold text-lg">
                    Элегантный пруд
                  </h3>
                  <p className="text-sm opacity-80">Москва, 2024</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="/img/3706b679-b2db-4def-86b9-421cdb7fa5e6.jpg"
                alt="Ландшафтный дизайн"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair font-semibold text-lg">
                    Ландшафтный дизайн
                  </h3>
                  <p className="text-sm opacity-80">Подмосковье, 2024</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="/img/1eb94e28-2ecf-405f-91bc-18637c27e77e.jpg"
                alt="Строительные работы"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair font-semibold text-lg">
                    Строительство
                  </h3>
                  <p className="text-sm opacity-80">Москва, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Свяжитесь с нами для бесплатной консультации
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">
                  Телефон
                </h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">
                  Email
                </h3>
                <p className="text-gray-600">info@avgust-ponds.ru</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">
                  Адрес
                </h3>
                <p className="text-gray-600">Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-playfair font-bold text-xl mb-4">
                ООО "Август"
              </h3>
              <p className="text-gray-400">
                Создаем искусственные пруды и воплощаем ландшафтные мечты с 2009
                года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Строительство</li>
                <li>Ландшафтный дизайн</li>
                <li>Искусственные пруды</li>
                <li>Системы полива</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@avgust-ponds.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Facebook" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО "Август". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
