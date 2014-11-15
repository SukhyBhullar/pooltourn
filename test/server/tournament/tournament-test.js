describe('In case of emergency', function () {
 
    var exiter;

    before(function () {
        exiter = {exit : true};
    });
 
    it('should have nearest exit', function (done) {
        
        expect(exiter).not.to.be.null;
        done();
    });
});