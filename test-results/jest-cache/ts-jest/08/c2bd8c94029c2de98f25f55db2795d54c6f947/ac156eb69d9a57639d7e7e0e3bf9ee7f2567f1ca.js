"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/router/testing");
const app_component_1 = require("app/app.component");
describe('AppComponent', () => {
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.RouterTestingModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it(`should have as title 'ng-demo'`, () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('ArraWeb');
    });
    it('should render title', () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('ArraWeb app is running!');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvZ2V6aW0vZGV2L3dlYi93ZWJwYWNrLXRzL3NyYy90ZXN0L3NwZWMvYXBwLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXVEO0FBQ3ZELHFEQUE4RDtBQUM5RCxxREFBaUQ7QUFFakQsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsVUFBVSxDQUFDLGVBQUssQ0FBQyxHQUFHLEVBQUU7UUFDcEIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ1AsNkJBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2FBQ2I7U0FDRixDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtRQUMvQixNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDdEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtRQUM3QixNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ25HLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvZ2V6aW0vZGV2L3dlYi93ZWJwYWNrLXRzL3NyYy90ZXN0L3NwZWMvYXBwLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGFzeW5jIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IFJvdXRlclRlc3RpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvdGVzdGluZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdhcHAvYXBwLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdBcHBDb21wb25lbnQnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlclRlc3RpbmdNb2R1bGVcbiAgICAgIF0sXG4gICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgICBdLFxuICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gIH0pKTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZSB0aGUgYXBwJywgKCkgPT4ge1xuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgIGNvbnN0IGFwcCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGV4cGVjdChhcHApLnRvQmVUcnV0aHkoKTtcbiAgfSk7XG5cbiAgaXQoYHNob3VsZCBoYXZlIGFzIHRpdGxlICduZy1kZW1vJ2AsICgpID0+IHtcbiAgICBjb25zdCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQXBwQ29tcG9uZW50KTtcbiAgICBjb25zdCBhcHAgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBleHBlY3QoYXBwLnRpdGxlKS50b0VxdWFsKCdBcnJhV2ViJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgcmVuZGVyIHRpdGxlJywgKCkgPT4ge1xuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGNvbnN0IGNvbXBpbGVkID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBleHBlY3QoY29tcGlsZWQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgc3BhbicpLnRleHRDb250ZW50KS50b0NvbnRhaW4oJ0FycmFXZWIgYXBwIGlzIHJ1bm5pbmchJyk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=