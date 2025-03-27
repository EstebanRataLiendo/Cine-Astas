"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const hall_service_1 = require("../hall/hall.service");
const seat_service_1 = require("../seat/seat.service");
const movies_service_1 = require("../movies/movies.service");
const screening_service_1 = require("../screening/screening.service");
const booking_service_1 = require("../booking/booking.service");
const prisma_service_1 = require("../prisma/prisma.service");
const data_mock_1 = require("./data/data.mock");
let SeedService = class SeedService {
    constructor(prismaService, hallService, seatService, movieService, screeningService, bookingService) {
        this.prismaService = prismaService;
        this.hallService = hallService;
        this.seatService = seatService;
        this.movieService = movieService;
        this.screeningService = screeningService;
        this.bookingService = bookingService;
    }
    async executeSeed() {
        await this.prismaService.seatBooking.deleteMany();
        await this.prismaService.seat.deleteMany();
        await this.prismaService.booking.deleteMany();
        await this.prismaService.screening.deleteMany();
        await this.prismaService.hall.deleteMany();
        await this.prismaService.movie.deleteMany();
        const halls = await this.createHalls();
        const seats = await this.createSeats(halls);
        const movies = await this.createMovies();
        const screenings = await this.createScreenings(halls, movies);
        const bookings = await this.createBookings(screenings);
        await this.createSeatsBooking(bookings, seats);
        return 'Executed';
    }
    async createHalls() {
        const { hall } = data_mock_1.mockData;
        await this.prismaService.hall.createMany({
            data: hall
        });
        const hallsCreated = await this.hallService.findAll();
        return hallsCreated;
    }
    async createSeats(halls) {
        const { seat } = data_mock_1.mockData;
        const mock = halls.map((hall, index) => ({
            hallId: hall.id,
            number: seat[index].number,
            row: seat[index].row
        }));
        await this.prismaService.seat.createMany({
            data: mock
        });
        const seatsCreated = await this.seatService.findAll();
        return seatsCreated;
    }
    async createMovies() {
        const { movie } = data_mock_1.mockData;
        await this.prismaService.movie.createMany({
            data: movie
        });
        await this.movieService.findAll();
        const moviesCreated = await this.movieService.findAll();
        return moviesCreated;
    }
    async createScreenings(halls, movies) {
        const { screening } = data_mock_1.mockData;
        const mock = screening.map((screening, index) => ({
            hallId: halls[index].id,
            movieId: movies[index].id,
            price: screening.price,
            schedule: screening.schedule
        }));
        await this.prismaService.screening.createMany({
            data: mock
        });
        const screeningsCreated = await this.screeningService.findAll();
        return screeningsCreated;
    }
    async createBookings(screenings) {
        const { booking } = data_mock_1.mockData;
        const mock = booking.map((booking, index) => ({
            screeningId: screenings[index].id,
            totalPrice: screenings[index].price,
            userId: booking.userId
        }));
        await this.prismaService.booking.createMany({
            data: mock
        });
        const bookingsCreated = await this.prismaService.booking.findMany();
        return bookingsCreated;
    }
    async createSeatsBooking(bookings, seats) {
        const mock = bookings.map((booking, index) => ({
            bookingId: booking.id,
            seatId: seats[index].id
        }));
        await this.prismaService.seatBooking.createMany({
            data: mock
        });
        const seatsBookingCreated = await this.bookingService.findAll();
        return seatsBookingCreated;
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        hall_service_1.HallService,
        seat_service_1.SeatService,
        movies_service_1.MoviesService,
        screening_service_1.ScreeningService,
        booking_service_1.BookingService])
], SeedService);
//# sourceMappingURL=seed.service.js.map