"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Plane,
  Building,
  FileText,
  Users,
  Clock,
  Shield,
  Star,
  Heart,
  CheckCircle,
  Menu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 8)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 8) % 8)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-32 h-20">
                <Image
                  src="/logowaw2.png?height=48&width=48"
                  alt="Wahana Amanah Wisata Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg md:text-xl font-bold text-[#1d3154] truncate">Wahana Amanah Wisata</h1>
                <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Perjalanan Ibadah Terpercaya</p>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link
                href="#tentang"
                className="text-[#1d3154] hover:text-[#f3d05a] transition-colors font-medium text-sm xl:text-base"
              >
                Tentang Kami
              </Link>
              <Link
                href="#layanan"
                className="text-[#1d3154] hover:text-[#f3d05a] transition-colors font-medium text-sm xl:text-base"
              >
                Layanan
              </Link>
              <Link
                href="#galeri"
                className="text-[#1d3154] hover:text-[#f3d05a] transition-colors font-medium text-sm xl:text-base"
              >
                Galeri
              </Link>
              <Link
                href="#kontak"
                className="text-[#1d3154] hover:text-[#f3d05a] transition-colors font-medium text-sm xl:text-base"
              >
                Kontak
              </Link>
            </nav>
            <Button className="lg:hidden" variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image and Curved Accents */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/umroh.jpg"
            alt="Elegant Curved Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1d3154]/60"></div>
        </div>

        {/* Curved Accent Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* Top Right Curve */}
          <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-64 h-64 md:w-96 md:h-96">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f3d05a]/30 to-[#f3d05a]/10 blur-2xl md:blur-3xl"></div>
          </div>

          {/* Bottom Left Curve */}
          <div className="absolute -bottom-16 -left-16 md:-bottom-32 md:-left-32 w-80 h-80 md:w-[600px] md:h-[600px]">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#f3d05a]/20 to-transparent blur-xl md:blur-2xl"></div>
          </div>

          {/* Flowing Curves - Responsive SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1920 1080"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0 600C200 500 400 700 600 600C800 500 1000 650 1200 550C1400 450 1600 600 1800 500C1850 480 1920 520 1920 520V1080H0V600Z"
              fill="url(#gradient1)"
              fillOpacity="0.15"
            />
            <path
              d="M0 700C150 650 300 750 450 700C600 650 750 720 900 680C1050 640 1200 700 1350 660C1500 620 1650 680 1800 640C1860 620 1920 640 1920 640V1080H0V700Z"
              fill="url(#gradient2)"
              fillOpacity="0.12"
            />
            <path
              d="M0 800C100 780 200 820 300 800C500 760 700 840 900 800C1100 760 1300 820 1500 780C1700 740 1850 780 1920 760V1080H0V800Z"
              fill="url(#gradient3)"
              fillOpacity="0.08"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f3d05a" />
                <stop offset="50%" stopColor="#1d3154" />
                <stop offset="100%" stopColor="#f3d05a" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d3154" />
                <stop offset="50%" stopColor="#f3d05a" />
                <stop offset="100%" stopColor="#1d3154" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f3d05a" />
                <stop offset="100%" stopColor="#1d3154" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 md:mb-8">
              <div className="inline-block p-3 md:p-4 mb-4">
                
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-[#f3d05a] bg-clip-text text-transparent">
                Wahana Amanah
              </span>
              <br />
              <span className="text-white">Wisata</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed text-gray-200 max-w-3xl mx-auto px-4">
              Percayakan ibadah umroh yang aman, nyaman, terpercaya dan insyaallah amanah bersama kami
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f3d05a] to-[#f3d05a]/80 text-[#1d3154] hover:from-[#f3d05a]/90 hover:to-[#f3d05a]/70 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="https://wa.me/6285810259076" target="_blank">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Hubungi Kami
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 bg-white/10 backdrop-blur-sm text-white hover:bg-white backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full transition-all duration-300"
                asChild
              >
                <Link href="#layanan">Lihat Paket Umroh</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f3d05a] mb-1 md:mb-2">1000+</div>
                <div className="text-sm md:text-base text-gray-300">Jamaah Terlayani</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f3d05a] mb-1 md:mb-2">15+</div>
                <div className="text-sm md:text-base text-gray-300">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f3d05a] mb-1 md:mb-2">100%</div>
                <div className="text-sm md:text-base text-gray-300">Kepuasan Jamaah</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Modern Design */}
      <section id="tentang" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f3d05a]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block p-3 rounded-full bg-[#1d3154]/10 mb-4">
                <Building className="w-8 h-8 text-[#1d3154]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d3154] mb-6">Tentang Kami</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1d3154] to-[#f3d05a] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mitra terpercaya perjalanan ibadah Anda ke Tanah Suci
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    PT Wahana Amanah Wisata adalah perusahaan yang bergerak di bidang jasa perjalanan ibadah haji,
                    umroh, dan wisata halal. Berdiri dengan legalitas lengkap dan izin resmi dari Kementerian Agama
                    Republik Indonesia, perusahaan ini berkomitmen memberikan pelayanan terbaik, profesional, dan
                    terpercaya bagi seluruh jamaah Indonesia.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Dengan pengalaman dan sistem operasional yang terintegrasi, PT Wahana Amanah Wisata siap menjadi
                    mitra utama dalam mewujudkan perjalanan ibadah ke Tanah Suci yang aman, nyaman, dan penuh
                    keberkahan.
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[#1d3154]/10 to-[#f3d05a]/10 rounded-2xl"></div>
              </div>

              <div className="relative">
                <Image
                  src="/umroh3.png?height=400&width=500"
                  alt="About Us"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d3154]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Modern Cards */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d3154] to-[#2a4a7a]"></div>
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0 0C300 150 600 50 900 100C1200 150 1500 50 1800 100C1850 110 1920 90 1920 90V0H0Z"
              fill="url(#topGradient)"
              fillOpacity="0.15"
            />
            <path
              d="M0 100C250 200 500 120 750 160C1000 200 1250 120 1500 160C1650 180 1800 140 1920 160V0H0V100Z"
              fill="url(#topGradient2)"
              fillOpacity="0.1"
            />
            <defs>
              <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f3d05a" />
                <stop offset="50%" stopColor="transparent" />
                <stop offset="100%" stopColor="#f3d05a" />
              </linearGradient>
              <linearGradient id="topGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#f3d05a" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f3d05a] to-[#f3d05a]/70 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-[#1d3154]" />
                  </div>
                  Visi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Menjadi penyelenggara perjalanan ibadah haji dan umroh terdepan di Indonesia dengan pelayanan
                  berkualitas, bimbingan sesuai syariat, serta inovasi teknologi untuk kemudahan jamaah.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f3d05a] to-[#f3d05a]/70 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-[#1d3154]" />
                  </div>
                  Misi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#f3d05a] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-lg">
                      Menyediakan layanan perjalanan haji dan umroh yang amanah, profesional, dan sesuai tuntunan
                      syariat.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#f3d05a] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-lg">
                      Memberikan bimbingan ibadah secara menyeluruh, mulai dari persiapan hingga pelaksanaan di Tanah
                      Suci.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#f3d05a] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-lg">
                      Menawarkan paket perjalanan yang variatif dan dapat disesuaikan dengan anggaran jamaah.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#f3d05a] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-lg">
                      Menjaga kepercayaan dan kepuasan pelanggan dengan pelayanan prima dan transparan.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section with Modern Grid */}
      <section id="layanan" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1d3154]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 mb-4">
          
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d3154] mb-6">Layanan Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1d3154] to-[#f3d05a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Layanan lengkap untuk perjalanan ibadah yang sempurna
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Paket Umroh Reguler, Hemat, dan VIP",
                desc: "Berbagai pilihan paket sesuai kebutuhan dan budget Anda",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: Star,
                title: "Paket Haji Khusus, Haji Plus",
                desc: "Layanan haji dengan fasilitas terbaik dan bimbingan lengkap",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: MapPin,
                title: "Wisata Halal dan Ziarah Religi",
                desc: "Perjalanan wisata bernuansa islami ke berbagai destinasi",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: Plane,
                title: "Tiket Pesawat",
                desc: "Booking tiket domestik dan internasional dengan harga terbaik",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: Building,
                title: "Reservasi Hotel",
                desc: "Hotel bintang 3-5 di Makkah dan Madinah dengan lokasi strategis",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: FileText,
                title: "Pengurusan Dokumen",
                desc: "Visa, paspor, dan dokumen perjalanan dengan proses cepat",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: Users,
                title: "Bimbingan Manasik",
                desc: "Haji dan umroh secara intensif dengan ustadz berpengalaman",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: MessageCircle,
                title: "Konsultasi Ibadah",
                desc: "Konsultasi perjalanan dan ibadah 24 jam dengan tim ahli",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: Shield,
                title: "Transportasi Eksklusif",
                desc: "Kendaraan nyaman dan aman selama di Tanah Suci",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
              {
                icon: Clock,
                title: "Customer Service 24 Jam",
                desc: "Pendampingan dan bantuan sepanjang waktu perjalanan",
                color: "from-[#1d3154] to-[#2a4a7a]",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="text-center relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-[#f3d05a]" />
                  </div>
                  <CardTitle className="text-xl text-[#1d3154] group-hover:text-[#1d3154] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="galeri" className="py-20 bg-gradient-to-br from-[#1d3154] to-[#2a4a7a] relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0 150C400 100 800 200 1200 120C1600 40 1920 80 1920 80V0H0V150Z"
              fill="url(#galleryGradient)"
              fillOpacity="0.12"
            />
            <path
              d="M0 250C300 180 600 280 900 220C1200 160 1500 240 1800 180C1860 170 1920 180 1920 180V0H0V250Z"
              fill="url(#galleryGradient2)"
              fillOpacity="0.08"
            />
            <defs>
              <linearGradient id="galleryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f3d05a" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="galleryGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#f3d05a" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <Star className="w-8 h-8 text-[#f3d05a]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Galeri Perjalanan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f3d05a] to-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Dokumentasi perjalanan ibadah umroh bersama jamaah Wahana Amanah Wisata
            </p>
          </div>

          <div className="max-w-7xl mx-auto">

                 {/* Image Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {[
                    {
                      title: "Kaaba dan Masjid al-Haram",
                      desc: "Makkah al-Mukarramah",
                      image: "/1.jpeg?height=600&width=1200",
                    },
                    {
                      title: "Masjid Nabawi",
                      desc: "Madinah al-Munawwarah",
                      image: "/2.jpeg?height=600&width=1200",
                    },
                    {
                      title: "Hotel Makkah Premium",
                      desc: "Akomodasi Terbaik di Makkah",
                      image: "/3.jpeg?height=600&width=1200",
                    },
                    {
                      title: "Jamaah Umroh Bersama",
                      desc: "Perjalanan Penuh Berkah",
                      image: "/4.jpeg?height=600&width=1200",
                    },
                    {
                      title: "Bimbingan Manasik Haji",
                      desc: "Persiapan Ibadah Lengkap",
                      image: "/5.jpeg?height=600&width=1200",
                    },
                    {
                      title: "Ziarah Jabal Rahmah",
                      desc: "Padang Arafah",
                      image: "/6.jpeg?height=600&width=1200",
                    },
                    {
                      title: "Masjid Quba",
                      desc: "Masjid Pertama dalam Islam",
                      image: "/7.jpeg?height=600&width=1200",
                    },
                    {
                      title: "Raudhah Sharif",
                      desc: "Taman Surga di Bumi",
                      image: "/8.jpeg?height=600&width=1200",
                    },
                  ].map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-96 md:h-[500px]">
                
                <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                  width={1200}
                  height={500}
                  className="w-full h-full object-cover"                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-200 text-lg">{item.desc}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#f3d05a]" />
                  </div>
                </div>
              </div>
                  ))}
              </div>
            </div>

          

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: 8 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-[#f3d05a]" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f3d05a]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-[#1d3154]/10 mb-4">
              <Shield className="w-8 h-8 text-[#1d3154]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d3154] mb-6">
              Terpercaya dengan Izin Resmi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1d3154] to-[#f3d05a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Legalitas lengkap dan sertifikasi resmi untuk kepercayaan Anda
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">

            {[
              { id: 1, image: "/ulogo1.png?height=80&width=80" },
              { id: 2, image: "/ulogo2.png?height=85&width=85" },
              { id: 3, image: "/ulogo3.png?height=75&width=90" },
              { id: 4, image: "/ulogo4.png?height=90&width=75" },
              { id: 5, image: "/ulogo5.png?height=82&width=88" },
            ].map((item) => (

              <div
                key={item.id}
                className="group w-32 h-32 bg-gradient-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Logo Sertifikat ${item.id}`}
                  width={80}
                  height={80}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Certificates Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f3d05a]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-[#1d3154]/10 mb-4">
              <Shield className="w-8 h-8 text-[#1d3154]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d3154] mb-6">Sertifikat & Legalitas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1d3154] to-[#f3d05a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Terdaftar resmi dan memiliki izin lengkap dari instansi terkait
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Izin Penyelenggaraan Umroh",
                description: "",
                image: "/sertifikat-1.jpg?height=360&width=640",
              },
              {
                title: "Sertifikat Basic Reservation",
                description: "",
                image: "/sertifikat2.jpg?height=360&width=640",
              },
              {
                title: "Sertifikat Daftar Tiketing",
                //description: "Terdaftar di Kementerian Pariwisata",
                image: "/sertifikat3.jpg?height=360&width=640",
              },
              {
                title: "Sertifikat Basic Reservation",
                //description: "Standar Manajemen Mutu Internasional",
                image: "/sertifikat4.jpg?height=360&width=640",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={640}
                    height={360}
                    //className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#f3d05a]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1d3154] mb-2 group-hover:text-[#1d3154] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                  <div className="mt-4 flex items-center text-sm text-[#f3d05a] font-medium">
                    <Shield className="w-4 h-4 mr-2" />
                    Terverifikasi
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1d3154]/10 to-[#f3d05a]/10 rounded-full">
              <CheckCircle className="w-5 h-5 text-[#1d3154] mr-2" />
              <span className="text-[#1d3154] font-medium">Semua sertifikat telah diverifikasi dan masih berlaku</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brochures Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1d3154]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-[#1d3154]/10 mb-4">
              <FileText className="w-8 h-8 text-[#1d3154]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d3154] mb-6">Brosur</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1d3154] to-[#f3d05a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Informasi lengkap paket umroh dan layanan kami</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                image: "/brosur1.jpg?height=340&width=360",
                downloadLink: "/downloads/paket-umroh-2025.pdf",
              },
              {
                image: "/brosur2.jpg?height=340&width=360",
                downloadLink: "/downloads/paket-haji-plus-2025.pdf",
              },
            ].map((brochure, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={brochure.image || "/placeholder.svg"}
                    //alt={brochure.title}
                    alt={`Brosur ${index + 1}`}
                    width={360}
                    height={640}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
                    //className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>



                    </div>

                      </div>
                    ))}
                  </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
                    <Button
              size="lg"
              className="bg-gradient-to-r from-[#1d3154] to-[#2a4a7a] hover:from-[#2a4a7a] hover:to-[#1d3154] text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href="https://wa.me/6285810259076" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Kami untuk Info Lebih Lanjut
                      </Link>
                    </Button>

          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-[#1d3154] via-[#2a4a7a] to-[#1d3154] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="200" r="300" fill="url(#commitmentGradient)" fillOpacity="0.1" />
            <circle cx="1720" cy="880" r="400" fill="url(#commitmentGradient2)" fillOpacity="0.1" />
            <defs>
              <radialGradient id="commitmentGradient">
                <stop offset="0%" stopColor="#f3d05a" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="commitmentGradient2">
                <stop offset="0%" stopColor="#f3d05a" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Komitmen Pelayanan</h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-200">
              Kami berkomitmen memberikan pengalaman perjalanan ibadah yang tak terlupakan, mulai dari edukasi,
              bimbingan manasik, pengurusan dokumen, hingga pendampingan selama di Tanah Suci. Setiap jamaah mendapatkan
              perhatian penuh, fasilitas terbaik, dan kemudahan akses layanan, sehingga dapat fokus menjalankan ibadah
              dengan khusyuk dan tenang.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f3d05a] to-[#f3d05a]/80 text-[#1d3154] hover:from-[#f3d05a]/90 hover:to-[#f3d05a]/70 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="https://wa.me/6285810259076" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1d3154]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-[#1d3154]/10 mb-4">
              <MessageCircle className="w-8 h-8 text-[#1d3154]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d3154] mb-6">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1d3154] to-[#f3d05a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Siap melayani dan menjawab pertanyaan Anda 24/7</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f3d05a]/10 to-transparent rounded-full blur-2xl"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-[#1d3154] flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#f3d05a]" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <MapPin className="w-6 h-6 text-[#f3d05a] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1d3154] mb-1">Alamat Kantor</h4>
                    <p className="text-gray-700 leading-relaxed">
                      GEDUNG MENARA ANUGRAH lT.17 UNIT BB Jl. MEGA KUNINGAN BARAT lOT 8.6 - 8.7 KUNINGAN TIMNUR, SETIA BUDI
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Phone className="w-6 h-6 text-[#f3d05a]" />
                  <div>
                    <h4 className="font-semibold text-[#1d3154] mb-1">Telepon</h4>
                    <p className="text-gray-700">(021) 57941907</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#f3d05a]" />
                  <div>
                    <h4 className="font-semibold text-[#1d3154] mb-1">WhatsApp</h4>
                    <p className="text-gray-700">0858-1025-9076</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Mail className="w-6 h-6 text-[#f3d05a]" />
                  <div>
                    <h4 className="font-semibold text-[#1d3154] mb-1">Email</h4>
                    <p className="text-gray-700">ptwahanaamanahwisata@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1d3154]/10 to-transparent rounded-full blur-2xl"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-[#1d3154] flex items-center">
                  <Instagram className="w-6 h-6 mr-3 text-[#f3d05a]" />
                  Media Sosial
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-col items-center space-y-4 mb-6">
                  {[
                    {
                      icon: Instagram,
                      name: "Instagram",
                      color: "text-pink-500",
                      href: "https://instagram.com/wahanaamanahwisata_",
                    },
                    {
                      icon: Facebook,
                      name: "Facebook",
                      color: "text-blue-600",
                      href: "https://facebook.com/wahanaamanahwisata_",
                    },
                    {
                      icon: Twitter,
                      name: "Twitter",
                      color: "text-blue-400",
                      href: "https://twitter.com/wahanaamanahwisata_",
                    },
                    {
                      icon: MessageCircle,
                      name: "TikTok",
                      color: "text-black",
                      href: "https://tiktok.com/@wahanaamanahwisata_",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="flex items-center justify-center space-x-4 p-4 rounded-xl border-2 border-gray-100 hover:border-[#f3d05a]/30 hover:bg-gray-50 transition-all duration-300 group w-full max-w-xs"
                    >
                      <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-700 font-medium">{social.name}</span>
                    </Link>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="https://wa.me/6285810259076" target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat WhatsApp Sekarang
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* Final CTA Section */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/umroh3.png?height=1080&width=1920"
            alt="CTA Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d3154]/80 via-[#1d3154]/70 to-[#1d3154]/80"></div>
        </div>

        {/* Decorative SVG Elements */}
        <div className="absolute inset-0 z-10">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0 200C400 120 800 280 1200 180C1600 80 1920 140 1920 140V0H0V200Z"
              fill="url(#ctaGradient)"
              fillOpacity="0.2"
            />
            <path
              d="M0 350C300 250 600 400 900 320C1200 240 1500 360 1800 280C1860 260 1920 280 1920 280V0H0V350Z"
              fill="url(#ctaGradient2)"
              fillOpacity="0.15"
            />
            <defs>
              <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d3154" />
                <stop offset="50%" stopColor="transparent" />
                <stop offset="100%" stopColor="#1d3154" />
              </linearGradient>
              <linearGradient id="ctaGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#1d3154" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm mb-8">
        
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Wahana Amanah Wisata siap menjadi sahabat setia perjalanan ibadah Anda
            </h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-100 max-w-3xl mx-auto">
              Bersama kami, wujudkan niat suci menuju Baitullah dengan aman, nyaman, dan penuh keberkahan. Seluruh
              layanan kami didedikasikan untuk kepuasan dan keamanan jamaah, dengan standar profesionalisme dan
              integritas yang tinggi.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1d3154] hover:bg-gray-100 font-semibold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="https://wa.me/6285810259076" target="_blank">
                <MessageCircle className="w-6 h-6 mr-3" />
                Mulai Perjalanan Ibadah Anda
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d3154] text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#f3d05a]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-32 h-20 overflow-hidden">
                <Image
                  src="/logowaw.png?height=48&width=48"
                  alt="Wahana Amanah Wisata Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">Wahana Amanah Wisata</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg">Perjalanan Ibadah Terpercaya</p>
            <div className="flex justify-center space-x-8 mb-8">
              {[
                { icon: Instagram, href: "https://instagram.com/wahanaamanahwisata_" },
                { icon: Facebook, href: "https://facebook.com/wahanaamanahwisata_" },
                { icon: Twitter, href: "https://twitter.com/wahanaamanahwisata_" },
                { icon: MessageCircle, href: "https://wa.me/6285810259076" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-[#f3d05a] hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <div className="border-t border-white/20 pt-6">
              <p className="text-gray-400">
                © {new Date().getFullYear()} PT Wahana Amanah Wisata. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

{/* Floating WhatsApp Button */}
<Link
  href="https://wa.me/6285810259076"
  target="_blank"
  className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-green-600 hover:bg-green-700 text-white px-4 py-3 md:px-6 md:py-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 z-50 flex items-center space-x-2 md:space-x-3"
>
  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
  </svg>
  <span className="font-semibold text-xs md:text-sm whitespace-nowrap">Hubungi Kami</span>
</Link>
    </div>
  )
}
