from django.test import TestCase
from django.contrib.auth.models import User
from .models import Review, Title

class ReviewTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.title = Title.objects.create(name='Test Title')
        self.review = Review.objects.create(
            author=self.user,
            name_of_product='Test Product',
            title=self.title,
            review='This is a test review',
            score=8,
            image=None,
        )

    def test_review_str(self):
        self.assertEqual(str(self.review), 'This is a test r')

    def test_review_title_upper(self):
        self.assertEqual(self.review.title_upper, 'TEST TITLE')

    def test_review_author(self):
        self.assertEqual(self.review.author, self.user)

    def test_review_name_of_product(self):
        self.assertEqual(self.review.name_of_product, 'Test Product')

    def test_review_title(self):
        self.assertEqual(self.review.title, self.title)

    def test_review_review(self):
        self.assertEqual(self.review.review, 'This is a test review')

    def test_review_score(self):
        self.assertEqual(self.review.score, 8)

    def test_review_image(self):
        self.assertIsNone(self.review.image)

    def test_review_pub_date(self):
        self.assertIsNotNone(self.review.pub_date)