'use strict';

app.controller('PostsCtrl', function ($scope, Post, $location, Auth) {
    $scope.posts = Post.all;
    $scope.user = Auth.user;

    $scope.post = {url: 'http://', title: ''};

    $scope.deletePost = function (post) {
    	Post.delete(post);
	};

});