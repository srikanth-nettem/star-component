import { Component, OnInit, Input, OnChanges } from "@angular/core";

class StarClass {
    static star = "fa-star";
    static halfStar = "fa-star-half-o";
    static emptyStar = 'fa-star-o';
}

@Component({
    selector: 'ns-star',
    templateUrl: './template.html'
})
export class StarComponent implements OnInit {

    stars: { "class": string }[];

    @Input()
    config: any;

    private cursor:string;

    validateConfig(): void {
        this.config.rating = this.config.rating || 0;
        this.config.totalRating = this.config.totalRating || Math.ceil(this.config.rating) || 5;
        this.config.color = this.config.color || 'black';
        this.cursor=this.config.isReviewable ? 'pointer' : 'default';
    }

    ngOnInit() {
        try {
            this.config = JSON.parse(this.config);
        }
        catch (err) {
            throw new Error("Invalid configuration for star component: " + err);
        }
        this.validateConfig();
        this.initializeStars();
    }

    private initializeStars(): void {
        this.stars = [];

        for (let itr = 1; itr <= this.config.totalRating; itr++) {
            let star: { 'class': string, 'color': string, 'cursor': string } = { 'class': this.getStarClass(itr), 'color': this.config.color, 'cursor': this.cursor };
            this.stars.push(star);
        }
    }

    private setRating(index: number) {
        if (this.config.isReviewable) {
            this.config.rating = index + 1;
            this.stars = [];
            this.initializeStars();
        }
    }

    private getStarClass(index: number): string {
        if (index <= this.config.rating) {
            return StarClass.star;
        }

        let diff = (index) - this.config.rating;

        if (diff > 0.2 && diff < 1) {
            return StarClass.halfStar;
        }

        return StarClass.emptyStar;
    }

}