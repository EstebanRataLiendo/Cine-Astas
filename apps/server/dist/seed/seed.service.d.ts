import { HallService } from '../hall/hall.service';
import { SeatService } from '../seat/seat.service';
import { MoviesService } from '../movies/movies.service';
import { ScreeningService } from '../screening/screening.service';
import { BookingService } from '../booking/booking.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class SeedService {
    private readonly prismaService;
    private readonly hallService;
    private readonly seatService;
    private readonly movieService;
    private readonly screeningService;
    private readonly bookingService;
    constructor(prismaService: PrismaService, hallService: HallService, seatService: SeatService, movieService: MoviesService, screeningService: ScreeningService, bookingService: BookingService);
    executeSeed(): Promise<string>;
    private createHalls;
    private createSeats;
    private createMovies;
    private createScreenings;
    private createBookings;
    private createSeatsBooking;
}
